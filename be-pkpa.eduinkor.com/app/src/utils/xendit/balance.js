const x = require('../xendit');

const { Balance } = x;
const b = new Balance({});

const balance = async () => {
  try {
    const bal = await b.getBalance({
      accountType: Balance.AccountType.Cash,
    });
    return bal;
  } catch (err) {
    console.log(err);
  }
};

module.exports = balance;
