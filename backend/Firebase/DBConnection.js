import env from "dotenv/config.js";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export const Alumni = db.collection("Alumni");
export const Admin = db.collection("Admin");
export const SuccessStory = db.collection("SuccessStory");
export const News = db.collection("News");
export const Events = db.collection("Events");
