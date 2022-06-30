import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWfIlRlmk06iEM0vqhF-LxXOzYb6NIodI",
  authDomain: "memories-b65af.firebaseapp.com",
  projectId: "memories-b65af",
  storageBucket: "memories-b65af.appspot.com",
  messagingSenderId: "420493966087",
  appId: "1:420493966087:web:e275049437fa421ac8a3a2",
  measurementId: "G-NH1Y4VLS4H",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
