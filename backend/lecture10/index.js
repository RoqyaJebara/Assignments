import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { hostname } from 'os';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
const options={
    hostname:"https://api.wheretheiss.at/v1/satellites/25544",
    method:"GET",
}});

// const re

app.listen
(port, () => {
});