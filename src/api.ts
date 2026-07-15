import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

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

export function subscribeToBooks(callback: (books: any[]) => void) {
  return onSnapshot(booksCollectionRef, (snapshot) => {
    const books = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(books);
  });
}

export async function deleteBook(bookId: string) {
  const bookDocRef = doc(db, "books", bookId);
  await deleteDoc(bookDocRef);
}

export async function changeReadStatus(bookId: string, currentStatus: boolean) {
  const bookDocRef = doc(db, "books", bookId);
  await updateDoc(bookDocRef, {
    read: !currentStatus,
  });
}

export async function addBook(title: string, author: string) {
  await addDoc(booksCollectionRef, {
    title: title,
    author: author,
    read: false,
    "date added": serverTimestamp(),
  });
}
