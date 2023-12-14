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

## Run Container

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
