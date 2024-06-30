# pull the Node.js Docker image
FROM node:14.18.3-alpine3.15

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# create the directory inside the container
WORKDIR /home/node/app

# copy the package.json files from local machine to the workdir in container
COPY ./package.json ./

USER node
# run npm install in our local machine
RUN npm install
RUN npm install -g phantomjs-prebuilt --unsafe-perms

RUN chown -R node:node ./node_modules

# copy the generated modules and all other files to the container
COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
CMD ["node", "./src/server.js"]
