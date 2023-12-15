# Week 1 — App Containerization

# Containerized Backend

## Run Python

```
cd backend-flask/
pip3 install -r requirements.txt
export FRONTEND_URL="*"
export BACKEND_URL="*"
python -m flask run --host=0.0.0.0 --port=4567
cd ..
```

- make sure to unlock the port on the port tab
- open the link 4567 in the browser
- append to url to '/api/activities/home'
- you should get back json

## Add Dockerfile
Create a file here: backend-flask/Dockerfile

FROM python:3.10-slim-buster

WORKDIR /backend-flask

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development

EXPOSE ${PORT}

CMD [ "python3","-m","flask","run","--host=0.0.0.0","--port=4567" ]

## Build Container

docker build -t backend-flask ./backend-flask

### Run Container

```
docker run --rm -p 4567:4567 -it backend-flask
FRONTEND_URL="*" BACKEND_URL="*" docker run --rm -p 4567:4567 -it backend-flask
export FRONTEND_URL="*"
export BACKEND_URL="*"
docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' backend-flask
docker run --rm -p 4567:4567 -it -e FRONTEND_URL -e BACKEND_URL backend-flask
unset FRONTEND_URL
unset BACKEND_URL
```

### Run in background

```
docker container run --rm -p 4567:4567 -d backend-flask
```

### Return the container id into an Env Var
```
CONTAINER_ID=$(docker run --rm -p 4567:4567 -d backend-flask)
```

## Get Container Images or Running Container Ids

docker ps
docker images

## Get Access to a Container

docker exec CONTAINER_ID -it /bin/bash

## Containerize Frontend

## Run NPM Install

We have to run NPM install before building the container since it needs to copy the contents of node_modules
```
cd frontend-react-js
npm i
```
## Create Docker File
Create a file here: frontend-react-js/Dockerfile

```
FROM node:20.9.0

ENV PORT=3000

COPY . /frontend-react-js
WORKDIR /frontend-react-js
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "start"]
```

## Build Container

```
docker build -t frontend-react-js ./frontend-react-js
```

docker-compose.yml
```
version: "3.8"
services:
  backend-flask:
    environment:
      - FRONTEND_URL="https://3000-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
      - BACKEND_URL="https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
    build: ./backend-flask
    ports:
      - "4567:4567"
    volumes:
      - ./backend-flask:/backend-flask
  frontend-react-js:
    environment:
      - REACT_APP_BACKEND_URL="https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
    build: ./frontend-react-js
    ports:
      - "3000:3000"
    volumes:
      - ./frontend-react-js:/frontend-react-js

# the name flag is a hack to change the default prepend folder
# name when outprinting the image name
networks:
  internal-networks:
    driver: bridge
    name: crudder
```
