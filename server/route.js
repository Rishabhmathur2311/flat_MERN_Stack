import express from "express";
import { AddBuyer, GetBuyer, SubmitLoginBuyer } from "./controller/BuyerController.js";
import { AddOwner, CityFilter, GetOwner, GetSingleFlat, StateFilter, SubmitLoginOwner } from "./controller/OwnerController.js";
import { SendMessage, GetMessages, DeleteMessages } from "./controller/ConversationController.js";

const Route=express.Router();

Route.post("/addBuyerData", AddBuyer);
Route.post("/addOwnerData", AddOwner);
Route.get("/getOwnerData", GetOwner);
Route.get('/singleFlatData/:id', GetSingleFlat);
Route.post("/conversationSet", SendMessage);
Route.post("/logInOwner", SubmitLoginOwner);
Route.post("/logInBuyer", SubmitLoginBuyer);
Route.get("/getMessageData", GetMessages);
Route.get("/getBuyers", GetBuyer);
Route.post("/cityFilter", CityFilter);
Route.post("/stateFilter", StateFilter);
Route.post("/deleteMessageData", DeleteMessages);

export default Route;