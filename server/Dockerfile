FROM node:lts-alpine

RUN mkdir -p /home/server/node_modules && chown -R node:node /home/server

WORKDIR /home/server

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3000

CMD ["yarn", "start:dev"]
