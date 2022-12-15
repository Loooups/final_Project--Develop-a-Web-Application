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
    // insert code goes here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);

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
        name: "Admin Test",
        email: "admin@test.com",
        role: "Clinical Trial Manager",
        password: hashedPassword,
      },
    ];
    const fakeStudies = [
      {
        name: "Hannaford Brothers Company",
        startDate: "2021-09-13",
        endDate: "2022-02-05",
        status: "Finished",
        drugSubstance: "Metronidazole",
        image:
          "https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Baxter Healthcare Corporation",
        startDate: "2021-01-10",
        endDate: "2022-02-24",
        status: "Stopped",
        drugSubstance: "Droperidol",
        image:
          "https://images.unsplash.com/photo-1579165466991-467135ad3110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Fusion Pharmaceuticals",
        startDate: "2022-06-28",
        endDate: "2023-01-27",
        status: "Running",
        drugSubstance: "Citalopram",
        image:
          "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Apotheca Company",
        startDate: "2023-02-05",
        endDate: "2023-03-27",
        status: "Scheduled",
        drugSubstance: "Deflex",
        image:
          "https://images.unsplash.com/photo-1631557676757-fcc7b1160be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=80",
      },
      {
        name: "Apotex Corp.",
        startDate: "2021-02-17",
        endDate: "2022-08-23",
        status: "Finished",
        drugSubstance: "Glipizide",
        image:
          "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "PBM Pharmaceuticals",
        startDate: "2021-06-02",
        endDate: "2022-11-18",
        status: "Finished",
        drugSubstance: "Droperidol",
        image:
          "https://images.unsplash.com/photo-1530483041767-04094d3281f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      },
      {
        name: "Newton Laboratories",
        startDate: "2022-11-20",
        endDate: "2022-11-29",
        status: "Stopped",
        drugSubstance: "Ramipril",
        image:
          "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Proficient Rx",
        startDate: "2023-07-19",
        endDate: "2023-09-19",
        status: "Scheduled",
        drugSubstance: "Lansoprazole",
        image:
          "https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      },
    ];

    const fakePatients = [
      {
        name: "Donia Bahike",
        age: 61,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Fusion Pharmaceuticals",
      },
      {
        name: "Alvis Abley",
        age: 32,
        gender: "Male",
        bloodGroup: "B+",
        studyName: "Fusion Pharmaceuticals",
      },
      {
        name: "Danika Brando",
        age: 64,
        gender: "Female",
        bloodGroup: "AB+",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Spense Belliveau",
        age: 54,
        gender: "Male",
        bloodGroup: "A-",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Liva Fogt",
        age: 20,
        gender: "Female",
        bloodGroup: "B-",
        studyName: "Fusion Pharmaceuticals LLC",
      },
      {
        name: "Joel Temby",
        age: 46,
        gender: "Male",
        bloodGroup: "AB-",
        studyName: "Fusion Pharmaceuticals",
      },
      {
        name: "Gerrard Hallum",
        age: 30,
        gender: "Male",
        bloodGroup: "O+",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Teddy Grace",
        age: 19,
        gender: "Female",
        bloodGroup: "0-",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Adelheid Walthew",
        age: 26,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Harriett Earingey",
        age: 41,
        gender: "Female",
        bloodGroup: "B+",
        studyName: "Fusion Pharmaceuticals",
      },
      {
        name: "Lombard Grebert",
        age: 19,
        gender: "Male",
        bloodGroup: "AB+",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Garrard Abramsky",
        age: 64,
        gender: "Male",
        bloodGroup: "A+",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Oriana Hakking",
        age: 59,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Fusion Pharmaceuticals",
      },
      {
        name: "Ailsun Gerardot",
        age: 20,
        gender: "Female",
        bloodGroup: "A-",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Rich Dobbinson",
        age: 20,
        gender: "Male",
        bloodGroup: "O-",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Lucienne Berthelet",
        age: 54,
        gender: "Female",
        bloodGroup: "AB-",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Elsinore Eles",
        age: 60,
        gender: "Female",
        bloodGroup: "A+",
        studyName: "Hannaford Brothers Company",
      },
      {
        name: "Ezri Phipard-Shears",
        age: 32,
        gender: "Male",
        bloodGroup: "A+",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Mahala Kalinsky",
        age: 27,
        gender: "Female",
        bloodGroup: "AB+",
        studyName: "Baxter Healthcare Corporation",
      },
      {
        name: "Bay Doblin",
        age: 35,
        gender: "Male",
        bloodGroup: "O-",
        studyName: "Baxter Healthcare Corporation",
      },
    ];
    const fakelogbooks = [
      {
        patientName: "Lombard Grebert",
        date: "2021-12-05T12:02:02",
        obervations: "Fever",
        studyName: "Hannaford Brothers Company",
        patientWeight: 83,
        patientBloodPressure: 97,
        patientTemperature: 39.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2021-12-06T09:15:45",
        obervations: "Skin rash",
        studyName: "Hannaford Brothers Company",
        patientWeight: 78,
        patientBloodPressure: 116,
        patientTemperature: 38.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2021-12-11T10:18:03",
        obervations: "Diarrhea",
        studyName: "Hannaford Brothers Company",
        patientWeight: 79,
        patientBloodPressure: 104,
        patientTemperature: 36.0,
      },
      {
        patientName: "Lombard Grebert",
        date: "2022-01-20T10:59:47",
        obervations: "Chest pain",
        studyName: "Hannaford Brothers Company",
        patientWeight: 89,
        patientBloodPressure: 113,
        patientTemperature: 36.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2022-02-02T11:59:24",
        obervations: "Headche",
        studyName: "Hannaford Brothers Company",
        patientWeight: 85,
        patientBloodPressure: 117,
        patientTemperature: 38.0,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-20T15:32:04",
        obervations: "Pimples",
        studyName: "Hannaford Brothers Company",
        patientWeight: 80,
        patientBloodPressure: 110,
        patientTemperature: 36.4,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-24T11:06:49",
        obervations: "Vertigo",
        studyName: "Hannaford Brothers Company",
        patientWeight: 79,
        patientBloodPressure: 113,
        patientTemperature: 37.8,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-30T13:22:50",
        obervations: "Stuffy ear",
        studyName: "Hannaford Brothers Company",
        patientWeight: 77,
        patientBloodPressure: 104,
        patientTemperature: 36.1,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-06-01T09:06:06",
        obervations: "Headche",
        studyName: "Hannaford Brothers Company",
        patientWeight: 76,
        patientBloodPressure: 79,
        patientTemperature: 36.7,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-08-29T14:48:52",
        obervations: "Itchy eyes",
        studyName: "Hannaford Brothers Company",
        patientWeight: 72,
        patientBloodPressure: 79,
        patientTemperature: 38.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-07-05T11:00:31",
        obervations: "Chest pain",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 51,
        patientBloodPressure: 89,
        patientTemperature: 37.7,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-08-10T10:54:28",
        obervations: "Pimples",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 52,
        patientBloodPressure: 93,
        patientTemperature: 35.5,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-08-27T09:50:50",
        obervations: "Vertigo",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 53,
        patientBloodPressure: 119,
        patientTemperature: 36.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-09-18T09:56:49",
        obervations: "Fever",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 56,
        patientBloodPressure: 93,
        patientTemperature: 38.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-09-20T13:40:47",
        obervations: "Diarrhea",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 53,
        patientBloodPressure: 122,
        patientTemperature: 37.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-07-09T12:25:43",
        obervations: "Diarrhea",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 69,
        patientBloodPressure: 105,
        patientTemperature: 35.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-09-02T14:17:51",
        obervations: "Constipation",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 67,
        patientBloodPressure: 111,
        patientTemperature: 35.8,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-09-09T12:44:48",
        obervations: "Headche",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 65,
        patientBloodPressure: 114,
        patientTemperature: 36.1,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-11-20T15:06:02",
        obervations: "Itchy eyes",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 64,
        patientBloodPressure: 99,
        patientTemperature: 36.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-12-12T13:18:12",
        obervations: "Skin rash",
        studyName: "Fusion Pharmaceuticals",
        patientWeight: 53,
        patientBloodPressure: 122,
        patientTemperature: 35.9,
      },
    ];
    const clean1 = await db.dropCollection("users");
    const clean2 = await db.dropCollection("studies");
    const clean3 = await db.dropCollection("patients");
    const clean4 = await db.dropCollection("logbooks");

    const result = await db.collection("users").insertMany(fakeUsers);
    const result2 = await db.collection("studies").insertMany(fakeStudies);
    const result3 = await db.collection("patients").insertMany(fakePatients);
    const result4 = await db.collection("logbooks").insertMany(fakelogbooks);

    // display the results of your operation
    console.log("collection users deleted");
    console.log("collection studies deleted");
    console.log("collection patients deleted");
    console.log("collection logbooks deleted");

    console.log(result.insertedIds);
    console.log(result2.insertedIds);
    console.log(result3.insertedIds);
    console.log(result4.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
