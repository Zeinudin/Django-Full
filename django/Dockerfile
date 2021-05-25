# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

RUN mkdir /Hos
WORKDIR /Hos
COPY ./Hos /Hos

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt


