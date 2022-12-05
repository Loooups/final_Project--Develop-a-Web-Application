const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const client = new MongoClient(process.env.MONGO_URI);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("Clinicify");
    const coll = db.collection("studies");
    // insert code goes here

    const fakeStudies = [
      {
        name: "Levothyroxine Sodium",
        startDate: {
          $date: {
            $numberLong: "1631491200000",
          },
        },
        endDate: {
          $date: {
            $numberLong: "1644019200000",
          },
        },
        drugSubstance: "Metronidazole",
      },
      {
        name: "Atenolol",
        startDate: {
          $date: {
            $numberLong: "1610236800000",
          },
        },
        endDate: {
          $date: {
            $numberLong: "1645660800000",
          },
        },
        drugSubstance: "Droperidol",
      },
      {
        name: "Citalopram",
        startDate: {
          $date: {
            $numberLong: "1656374400000",
          },
        },
        endDate: {
          $date: {
            $numberLong: "1674777600000",
          },
        },
        drugSubstance: "pegvisomant",
      },
    ];

    const result = await coll.insertMany(fakeStudies);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
