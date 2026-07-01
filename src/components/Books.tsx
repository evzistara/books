import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Popup from "./Popup";

export default function Books() {

  return (
    <>
      <div className="bg-background h-dvh p-5">
        <div className="max-w-7xl m-auto">
          <div className="flex justify-between pt-10 pb-10">
            <div>
              <button className="px-4 py-2 bg-button-background">All</button>
              <button className="px-4 py-2 bg-button-background">Unread</button>
              <button className="px-4 py-2 bg-button-background">Read</button>
            </div>
            <Popup />
          </div>

          <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3">
            <div className="bg-box-background p-4 border border-t-5 border-button-background">
              <div className="flex justify-between items-center">
                <span className="bg-button-background px-2 py-1 text-xs">
                  UNREAD
                </span>
                <button>
                  <FaRegTrashCan />
                </button>
              </div>

              <p className="mt-4 font-semibold text-text">Name of the book</p>
              <p className="mt-1 mb-4">Author</p>
              <hr className="text-gray-300" />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs">Added date</p>
                <button className="text-xs px-3 py-1 border border-primary text-primary font-semibold">
                  ✓ Mark read
                </button>
              </div>
            </div>

            <div className="bg-box-background p-4 border border-t-5 border-button-background border-t-primary">
              <div className="flex justify-between items-center">
                <span className="bg-primary-100 text-primary bg-primary-light px-2 py-1 text-xs">
                  READ
                </span>
                <button>
                  <FaRegTrashCan />
                </button>
              </div>

              <p className="mt-4 font-semibold">Name of the book</p>
              <p className="mt-1 mb-4">Author</p>
              <hr className="text-gray-300" />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs">Added date</p>
                <button className="text-xs px-3 py-1 border border-button-foreground text-button-foreground font-semibold">
                  Mark unread
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
