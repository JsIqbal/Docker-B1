FROM node:18-alpine 

WORKDIR /app

RUN echo "installing git..."

RUN apk update && apk add git

COPY . .

RUN npm install 

CMD ["node", "index.js"]