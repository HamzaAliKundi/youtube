const asyncHandler = require("express-async-handler");
const ClientInfo = require("../models/ClientInfo");

const contactCLientInfo = asyncHandler(async (req, res) => {
   const clientInfo = await ClientInfo.create({
      name: req.body.name,
      YoutubeName: req.body.YoutubeName,
      URL: req.body.URL,
      subs: req.body.subs,
      revenue: req.body.revenue,
      email: req.body.email,
      phone: req.body.phone,
      services: req.body.services,
      contactvia: req.body.contactvia,
      hearaboutus: req.body.hearaboutus,
   });

   try {
      res.status(201).json(clientInfo);
   } catch (error) {
      res.status(400);
      throw new Error(error);
   }
});

const getContactClientInfo = asyncHandler(async (req, res) => {
   const client = await ClientInfo.find({});

   try {
      res.status(200).json(client);
   } catch (error) {
      res.status(400);
      throw new Error(error);
   }
});

module.exports = {
   contactCLientInfo,
   getContactClientInfo,
};
