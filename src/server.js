import express from 'express';
import indexController from './controllers/index.js';

const server = express();

server.get('/', indexController);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});