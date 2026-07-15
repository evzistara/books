import { useState, useEffect } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Popup from "./Popup";
import { subscribeToBooks, deleteBook, changeReadStatus } from "../api";

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

interface Book {
  id: string;
  title: string;
  author: string;
  read: boolean;
  "date added": FirestoreTimestamp;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToBooks((books) => {
      setBooks(books);
    });
    return () => unsubscribe();
  }, []);

  const formatTimestamp = (timestampObj: FirestoreTimestamp) => {
    if (!timestampObj || typeof timestampObj.seconds !== "number") {
      return "No date";
    }

    const date = new Date(timestampObj.seconds * 1000);
    return date.toLocaleDateString("no-NO");
  };

  const handleDelete = async (bookId: string) => {
    try {
      await deleteBook(bookId);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleChangeReadStatus = async (
    bookId: string,
    currentStatus: boolean,
  ) => {
    try {
      await changeReadStatus(bookId, currentStatus);
    } catch (error) {
      console.error("Error changing read status:", error);
    }
  };

  return (
    <>
      <div className="bg-background h-dvh p-5">
        <div className="max-w-7xl m-auto">
          <div className="flex justify-between pt-10 pb-10">
            {/* FILTER BUTTONS & POPUP */}
            <div>
              <button className="px-4 py-2 bg-button-background">All</button>
              <button className="px-4 py-2 bg-button-background">Unread</button>
              <button className="px-4 py-2 bg-button-background">Read</button>
            </div>
            <Popup />
          </div>

          {/* BOOKS */}
          <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3">
            {books.length != 0
              ? books.map((book) => {
                  return (
                    <div
                      key={book.id}
                      className={`mb-5 md:mb-0 bg-box-background p-4 border border-t-5 ${
                        !book.read
                          ? "border-button-background"
                          : "border-t-primary"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-2 py-1 text-xs ${!book.read ? "bg-button-background" : "bg-primary-light text-primary"}`}
                        >
                          {book.read ? "READ" : "NOT READ"}
                        </span>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="hover:text-red-500"
                        >
                          <FaRegTrashCan />
                        </button>
                      </div>
                      <p className="mt-4 font-semibold text-text">
                        {book.title}
                      </p>
                      <p className="mt-1 mb-4">{book.author}</p>
                      <hr className="text-gray-300" />
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-xs">
                          Added date: {formatTimestamp(book["date added"])}
                        </p>
                        <button
                          className={`text-xs px-3 py-1 border font-semibold ${book.read ? "border-button-foreground text-button-foreground" : "border-primary text-primary"}`}
                          onClick={() =>
                            handleChangeReadStatus(book.id, book.read)
                          }
                        >
                          {!book.read ? "✓ Mark read" : "Mark not read"}
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
