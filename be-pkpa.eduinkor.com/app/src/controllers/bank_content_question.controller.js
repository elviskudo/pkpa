/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// const { client } = require('../utils/redis');
const db = require('../models');
const { success, error } = require('../utils/response-api');
const { upsert } = require('../utils/upsert');

const dbModel = db.master_bank_content_question;
const Type = db.master_bank_content_type;
const Content = db.master_bank_content_topic;
// const Category = db.master_bank_content_category;
const Options = db.master_bank_content_option;

const createData = async (req, res, next) => {
  const {
    questions, content_topic_id,
  } = req.body;
  const jsonQuestions = JSON.parse(questions);
  console.log(jsonQuestions);
  try {
    const pData = {};
    if (jsonQuestions.attachment_type && jsonQuestions.attachment_type !== 'null') {
      pData.attachment_type = jsonQuestions.attachment_type;
    }

    pData.content_type_id = jsonQuestions.question_type;
    pData.content_topic_id = parseInt(content_topic_id, 10);
    pData.name = jsonQuestions.question_name;
    pData.explain = jsonQuestions.explain;
    pData.owner_id = req.userId;
    console.log(pData);
    if (typeof req.files !== 'undefined') {
      if (req.files.url_question) {
        pData.url_question = req.files.url_question[0].location;
      }
    }
    const qData = await dbModel.create(pData);
    const newData = {
      id: qData.id,
    };
    console.log(`ID: ${qData.id}`);
    if (qData.id) {
      jsonQuestions.answers.forEach((element) => {
        Options.create({
          // eslint-disable-next-line max-len
          content_question_id: qData.id, option: element.value, is_correct: element.is_correct, owner_id: pData.owner_id,
        });
      });
    }

    return res.send(success('Tambah data berhasil', newData, res.statusCode));
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateData = async (req, res, next) => {
  const {
    questions, content_topic_id,
  } = req.body;
  const { id } = req.params;
  console.log(req.body);
  const jsonQuestions = JSON.parse(questions);
  console.log(jsonQuestions);
  try {
    const pData = {};
    if (jsonQuestions.attachment_type && jsonQuestions.attachment_type !== 'null') {
      pData.attachment_type = jsonQuestions.attachment_type;
    }

    pData.content_type_id = jsonQuestions.question_type;
    pData.content_topic_id = parseInt(content_topic_id, 10);
    pData.name = jsonQuestions.question_name;
    pData.explain = jsonQuestions.explain;
    pData.owner_id = req.userId;
    console.log(pData);
    if (typeof req.files !== 'undefined') {
      if (req.files.url_question) {
        pData.url_question = req.files.url_question[0].location;
      }
    }
    const qData = await upsert(dbModel, { where: { id } }, pData);
    console.log(qData);
    // const qData = await dbModel.update(pData, {
    //   where: {
    //     id,
    //   },
    // });
    await Options.destroy({
      where: {
        content_question_id: req.params.id,
      },
      force: true,
    });
    const arrParamsOptions = jsonQuestions.answers.map((item) => ({
      // eslint-disable-next-line max-len
      content_question_id: id, option: item.value, is_correct: item.is_correct, owner_id: req.userId,
    }));
    console.log('arrParamsOptions', arrParamsOptions);
    await Options.bulkCreate(
      arrParamsOptions,
      {
        updateOnDuplicate: ['content_question_id', 'option', 'is_correct', 'owner_id'],
      },
    );

    // if (qData.created) {
    return res.send(success('Update data berhasil', { id: req.params.id }, res.statusCode));
    // }
    // return res.status(404).send(error('Update data gagal', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const qData = await dbModel.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    });
    if (qData > 0) {
      return res.send(success('Hapus data berhasil', { id: req.params.id }, res.statusCode));
    }
    return res.status(404).send(error('Hapus data gagal', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

const getAllData = async (req, res, next) => {
  // let user = await cache.getAsync('user-creator-list');
  // console.log('Data from cache', user);

  // if (user) {
  // eslint-disable-next-line max-len
  //   return res.send(success('User berhasil ditemukan', { source: 'Redis', user: JSON.parse(user) }, res.statusCode));
  // }
  const { content_topic_id } = req.query;
  let where = null;
  if (content_topic_id) {
    where = { content_topic_id };
  }
  try {
    const data = await dbModel.findAll({
      where,
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [
        {
          model: Type,
          as: 'type',
          required: true,
          attributes: ['name'],
        },
        {
          model: Content,
          as: 'content_topic',
          required: true,
          attributes: ['name'],
          // include: [
          //   {
          //     model: Category,
          //     as: 'category',
          //     required: true,
          //     attributes: ['name'],
          //   },
          // ],
        },
        {
          model: Options,
          as: 'option_content_question',
          required: true,
          separate: true,
          attributes: ['id', 'option', 'is_correct'],
          order: [
            ['abjad', 'ASC'],
          ],
        },
      ],
      order: [
        ['id', 'ASC'],
      ],
    });
    // const cacheResponse = await cache.setAsync('user-creator-list', JSON.stringify(user));
    // console.log(cacheResponse);
    return res.send(success('Data berhasil ditemukan', { source: 'Database', data }, res.statusCode));
  } catch (err) {
    next(err);
  }
};

const getDataById = async (req, res, next) => {
  try {
    const qData = await dbModel.findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      include: [
        {
          model: Type,
          as: 'type',
          required: true,
          attributes: ['name'],
        },
        {
          model: Content,
          as: 'content_topic',
          required: true,
          attributes: ['name'],
          // include: [
          //   {
          //     model: Category,
          //     as: 'category',
          //     required: true,
          //     attributes: ['name'],
          //   },
          // ],
        },
        {
          model: Options,
          as: 'option_content_question',
          required: true,
          separate: true,
          attributes: ['option'],
          order: [
            ['abjad', 'ASC'],
          ],
        },
      ],
      order: [
        ['id', 'ASC'],
      ],
    });
    if (qData != null) {
      return res.send(success('Data berhasil ditemukan', qData, res.statusCode));
    }
    return res.status(404).send(error('Data tidak ditemukan', res.statusCode, true));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createData,
  updateData,
  deleteData,
  getAllData,
  getDataById,
};
