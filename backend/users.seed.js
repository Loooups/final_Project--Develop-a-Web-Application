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
    const coll = db.collection("users");
    // insert code goes here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("test123", salt);

    const fakeUsers = [
      {
        name: "Frankie McMickan",
        email: "fmcmickan0@about.com",
        role: "Clinical Trial Manager",
        password: hashedPassword,
      },
      {
        name: "Odell Mackett",
        email: "omackett1@fda.gov",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Letty Castro",
        email: "lcastro2@google.it",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Myer Gilford",
        email: "mgilford3@typepad.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Drusilla Huntall",
        email: "dhuntall4@qq.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Alon Streetfield",
        email: "astreetfield5@pinterest.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Krystalle O'Hern",
        email: "kohern6@list-manage.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Urbano McGahern",
        email: "umcgahern7@over-blog.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Norry Mullord",
        email: "nmullord8@elpais.com",
        role: "Investigator",
        password: hashedPassword,
      },
      {
        name: "Benedetta Heale",
        email: "bheale9@xrea.com",
        role: "Clinical Trial Manager",
        password: hashedPassword,
      },
      {
        name: "admintest",
        email: "admintest10@gmail.com",
        role: "Clinical Trial Manager",
        password: hashedPassword,
      },
    ];

    const result = await coll.insertMany(fakeUsers);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
