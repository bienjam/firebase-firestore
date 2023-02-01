const functions = require("firebase-functions");
const firebase = require("firebase-admin");
// const cors = require("cors")({ origin: true });
// const admin = require("firebase-admin");


firebase.initializeApp();

exports.endpoint = functions.https.onRequest(async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const userDetailsDoc = await firebase
      .firestore()
      .collection("userDetails")
      .doc()
      .get();
    if (userDetailsDoc.exists) {
      await firebase.firestore().collection("userDetails").doc().update(
        {
          Name: payload,
        },
        { merge: true }
      );
    } else {
      await firebase.firestore().collection("userDetails").doc().create(
      {
          Name: payload,
        },
        { merge: true }
      );
    }
    return res.status(200).send({ message: "Data written successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});


