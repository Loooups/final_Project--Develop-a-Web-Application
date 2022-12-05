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
    const coll = db.collection("patients");
    // insert code goes here

    const fakePatients = [
      {
        name: "Donia Bahike",
        age: 61,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Citalopram",
      },
      {
        name: "Alvis Abley",
        age: 32,
        gender: "Male",
        bloodGroup: "B+",
        studyName: "Citalopram",
      },
      {
        name: "Danika Brando",
        age: 64,
        gender: "Female",
        bloodGroup: "AB+",
        studyName: "Atenolol",
      },
      {
        name: "Spense Belliveau",
        age: 54,
        gender: "Male",
        bloodGroup: "A-",
        studyName: "Atenolol",
      },
      {
        name: "Liva Fogt",
        age: 20,
        gender: "Female",
        bloodGroup: "B-",
        studyName: "Citalopram",
      },
      {
        name: "Joel Temby",
        age: 46,
        gender: "Male",
        bloodGroup: "AB-",
        studyName: "Citalopram",
      },
      {
        name: "Gerrard Hallum",
        age: 30,
        gender: "Male",
        bloodGroup: "O+",
        studyName: "Atenolol",
      },
      {
        name: "Teddy Grace",
        age: 19,
        gender: "Female",
        bloodGroup: "0-",
        studyName: "Atenolol",
      },
      {
        name: "Adelheid Walthew",
        age: 26,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Atenolol",
      },
      {
        name: "Harriett Earingey",
        age: 41,
        gender: "Female",
        bloodGroup: "B+",
        studyName: "Citalopram",
      },
      {
        name: "Lombard Grebert",
        age: 19,
        gender: "Male",
        bloodGroup: "AB+",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Garrard Abramsky",
        age: 64,
        gender: "Male",
        bloodGroup: "A+",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Oriana Hakking",
        age: 59,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Citalopram",
      },
      {
        name: "Ailsun Gerardot",
        age: 20,
        gender: "Female",
        bloodGroup: "A-",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Rich Dobbinson",
        age: 20,
        gender: "Male",
        bloodGroup: "O-",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Lucienne Berthelet",
        age: 54,
        gender: "Female",
        bloodGroup: "AB-",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Elsinore Eles",
        age: 60,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Levothyroxine Sodium",
      },
      {
        name: "Ezri Phipard-Shears",
        age: 32,
        gender: "Male",
        bloodGroup: "A+",
        studyName: "Atenolol",
      },
      {
        name: "Mahala Kalinsky",
        age: 27,
        gender: "Female",
        bloodGroup: "AB+",
        studyName: "Atenolol",
      },
      {
        name: "Bay Doblin",
        age: 35,
        gender: "Male",
        bloodGroup: "O-",
        studyName: "Atenolol",
      },
    ];

    const result = await coll.insertMany(fakePatients);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
