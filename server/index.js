import express from "express";
import Connection from "./database/db.js";
import Route from './route.js';
import cors from 'cors';
import bodyParser from "body-parser";

const app=express();

app.use(cors());
app.use(bodyParser.json({exended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Route);

Connection();

const PORT=8000;

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));