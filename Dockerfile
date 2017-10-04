FROM gcr.io/cloud-builders/npm

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app

# To avoid issues when the flag `workdir` is defined with `docker run`,
# let's make this CLI global.
RUN npm install -g .

ENTRYPOINT ["mailgun"]
