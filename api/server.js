const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../routers/projects/projects-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.status(200).json("Hi")
})

module.exports = server;