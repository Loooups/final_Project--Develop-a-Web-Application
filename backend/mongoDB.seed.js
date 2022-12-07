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
    const hashedPassword = await bcrypt.hash("5hZcJaZlVJaREA7p", salt);

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
    const fakelogbooks = [
      {
        patientName: "Lombard Grebert",
        date: "2021-12-05T12:02:02",
        studyName: "Levothyroxine Sodium",
        patientWeight: 83,
        patientBloodPressure: 97,
        patientTemperature: 39.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2021-12-06T09:15:45",
        studyName: "Levothyroxine Sodium",
        patientWeight: 78,
        patientBloodPressure: 116,
        patientTemperature: 38.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2021-12-11T10:18:03",
        studyName: "Levothyroxine Sodium",
        patientWeight: 79,
        patientBloodPressure: 104,
        patientTemperature: 36.0,
      },
      {
        patientName: "Lombard Grebert",
        date: "2022-01-20T10:59:47",
        studyName: "Levothyroxine Sodium",
        patientWeight: 89,
        patientBloodPressure: 113,
        patientTemperature: 36.8,
      },
      {
        patientName: "Lombard Grebert",
        date: "2022-02-02T11:59:24",
        studyName: "Levothyroxine Sodium",
        patientWeight: 85,
        patientBloodPressure: 117,
        patientTemperature: 38.0,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-20T15:32:04",
        studyName: "Levothyroxine Sodium",
        patientWeight: 80,
        patientBloodPressure: 110,
        patientTemperature: 36.4,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-24T11:06:49",
        studyName: "Levothyroxine Sodium",
        patientWeight: 79,
        patientBloodPressure: 113,
        patientTemperature: 37.8,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-04-30T13:22:50",
        studyName: "Levothyroxine Sodium",
        patientWeight: 77,
        patientBloodPressure: 104,
        patientTemperature: 36.1,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-06-01T09:06:06",
        studyName: "Levothyroxine Sodium",
        patientWeight: 76,
        patientBloodPressure: 79,
        patientTemperature: 36.7,
      },
      {
        patientName: "Garrard Abramsky",
        date: "2022-08-29T14:48:52",
        studyName: "Levothyroxine Sodium",
        patientWeight: 72,
        patientBloodPressure: 79,
        patientTemperature: 38.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-07-05T11:00:31",
        studyName: "Citalopram",
        patientWeight: 51,
        patientBloodPressure: 89,
        patientTemperature: 37.7,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-08-10T10:54:28",
        studyName: "Citalopram",
        patientWeight: 52,
        patientBloodPressure: 93,
        patientTemperature: 35.5,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-08-27T09:50:50",
        studyName: "Citalopram",
        patientWeight: 53,
        patientBloodPressure: 119,
        patientTemperature: 36.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-09-18T09:56:49",
        studyName: "Citalopram",
        patientWeight: 56,
        patientBloodPressure: 93,
        patientTemperature: 38.0,
      },
      {
        patientName: "Donia Bahike",
        date: "2022-09-20T13:40:47",
        studyName: "Citalopram",
        patientWeight: 53,
        patientBloodPressure: 122,
        patientTemperature: 37.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-07-09T12:25:43",
        studyName: "Citalopram",
        patientWeight: 69,
        patientBloodPressure: 105,
        patientTemperature: 35.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-09-02T14:17:51",
        studyName: "Citalopram",
        patientWeight: 67,
        patientBloodPressure: 111,
        patientTemperature: 35.8,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-09-09T12:44:48",
        studyName: "Citalopram",
        patientWeight: 65,
        patientBloodPressure: 114,
        patientTemperature: 36.1,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-11-20T15:06:02",
        studyName: "Citalopram",
        patientWeight: 64,
        patientBloodPressure: 99,
        patientTemperature: 36.4,
      },
      {
        patientName: "Oriana Hakking",
        date: "2022-12-12T13:18:12",
        studyName: "Citalopram",
        patientWeight: 53,
        patientBloodPressure: 122,
        patientTemperature: 35.9,
      },
    ];

    const result = await db.collection("users").insertMany(fakeUsers);
    const result2 = await db.collection("studies").insertMany(fakeStudies);
    const result3 = await db.collection("patients").insertMany(fakePatients);
    const result4 = await db.collection("logbooks").insertMany(fakelogbooks);
    // display the results of your operation
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
