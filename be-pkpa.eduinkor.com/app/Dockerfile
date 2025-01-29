# pull the Node.js Docker image
FROM node:14.18.3-alpine3.15

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# change the user to non root
USER node

# create the directory inside the container
WORKDIR /home/node/app

# copy the package.json files from local machine to the workdir in container
COPY package.json ./

# run npm install in our local machine
RUN npm install --unsafe-perms
RUN npm install -g phantomjs-prebuilt --unsafe-perms

# copy the generated modules and all other files to the container
COPY --chown=node:node . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# the command that starts our app
CMD ["node", "src/server.js"]
