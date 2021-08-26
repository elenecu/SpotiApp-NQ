FROM node:latest
# get the app
WORKDIR /src
COPY . .

# install packages
RUN npm ci
RUN npm install -g @angular/cli

# start app
CMD ng serve --host 0.0.0.0

