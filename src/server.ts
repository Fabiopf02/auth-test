import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(routes);

server.listen(process.env.PORT || 3333);
