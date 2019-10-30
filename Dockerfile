FROM node:8-stretch

COPY ./NodeMicroservice /NodeMicroservice

WORKDIR /NodeMicroservice

RUN apt-get update \
    && apt-get dist-upgrade -y \
    && apt-get clean  \
    && echo 'Finished installing dependencies'

ENV NODE_ENV production
ENV PORT 3000

RUN npm install --production

EXPOSE 3000

CMD npm start