import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "PENDIENTE",
authDomain: "PENDIENTE",
projectId: "perfumeria-react",
storageBucket: "PENDIENTE",
messagingSenderId: "PENDIENTE",
appId: "PENDIENTE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
