// import * as mongoose from "mongoose";
// import { Injectable } from "@angular/core";
// // import { MongoClient } from "mongodb";

// @Injectable({
//   providedIn: "root"
// })
// export class DatabaseService {
//   // Favorites = [];
//   private readonly connectionString =
//     "mongodb+srv://cluster0-qjgoj.mongodb.net/test";
//   // private readonly dbName = process.env.DB_NAME || 'mean-to-do';

//   constructor() {}

//   async connect() {
//     // add async
//     console.log("connecting to mongo");
//     // this.Favorites = db.collection<any>("Favorites");

//     try {
//       // I added this extra check
//       console.log("setting client");
//       await mongoose.connect(this.connectionString, {
//         useNewUrlParser: true
//       });
//     } catch (error) {
//       console.log("error during connecting to mongo: ");
//       console.error(error);
//     }
//   }
// }
