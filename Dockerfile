FROM beevelop/ionic:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g cordova ionic

RUN npm install -g @angular/cli@7.3.9

COPY . .

# RUN ng serve

CMD ["ng", "serve" , "--host","0.0.0.0"]

# RUN ionic serve --port 8100 --address=127.0.0.1