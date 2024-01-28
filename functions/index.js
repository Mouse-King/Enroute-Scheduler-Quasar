const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const admin = require("firebase-admin");

const { MapController } = require("./api/maps/maps");
const EmailController = require("./api/user/email");

admin.initializeApp();

const db = admin.firestore();
const api = express();

api.use(cors({ origin: true }));
api.options("*", cors());

api.get("/maps/similar-zipcodes", async (req, res) => {
  const { zipcode, radius } = req.body;
  console.log("arrived", zipcode, radius);
  await MapController.GetZipCodesInRadius(zipcode, radius);
});

api.post("/user/mail/send", async (req, res) => {
  const { fname, email, authorization_link } = req.body;
  const response = await EmailController.SendEmail(
    fname,
    email,
    authorization_link
  );
  return res.status(200).send(response);
});

exports.api = functions.https.onRequest(api);
