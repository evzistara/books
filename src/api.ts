import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA9O6PwGBK-Dyd8KDjLGPOYiIHY5EoY8c4",
  authDomain: "bookdatabase-14be6.firebaseapp.com",
  projectId: "bookdatabase-14be6",
  storageBucket: "bookdatabase-14be6.firebasestorage.app",
  messagingSenderId: "194785310267",
  appId: "1:194785310267:web:91003c0a0bbfa1236ace1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const booksCollectionRef = collection(db, "books");

export async function getBooks() {
  const booksSnapshot = await getDocs(booksCollectionRef);
  return booksSnapshot.docs.map((doc) => doc.data());
}

console.log(getBooks());
