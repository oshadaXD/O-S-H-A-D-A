FROM node:lts-buster

RUN apt-get install -y nodejs \
  ffmpeg \
  imagemagick \
  webp && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm start

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
