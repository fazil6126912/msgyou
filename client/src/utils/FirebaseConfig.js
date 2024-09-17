import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2XsUnE1tQjTQwXttemZAuxyys-y1gtX8",
  authDomain: "msgyou-1.firebaseapp.com",
  projectId: "msgyou-1",
  storageBucket: "msgyou-1.appspot.com",
  messagingSenderId: "216727489067",
  appId: "1:216727489067:web:0d5f3528e08a050e47786e",
  measurementId: "G-0LQREVEK22"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
