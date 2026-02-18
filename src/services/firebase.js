import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCFSVINIhJjNUUBr7wwV84lTPTkHtR3ivo",
authDomain: "perfumeria-react-8c425.firebaseapp.com",
projectId: "perfumeria-react-8c425",
storageBucket: "perfumeria-react-8c425.firebasestorage.app",
messagingSenderId: "738025738271",
appId: "1:738025738271:web:eb319c33d26ec4245e452a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
