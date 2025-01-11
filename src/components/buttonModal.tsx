"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const icon = {
    route: "/categories",
    name: "categories",

    filledIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.8em"
        height="1.8em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123c.211.107.384.28.491.491c.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0m11-11a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714z"
        />
        <path
          fill="currentColor"
          d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.13 1.13 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5m11 8c0-.349 0-.523.038-.666c.104-.388.408-.692.796-.796c.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5z"
          opacity="0.5"
        />
      </svg>
    ),
    outlinedIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.8em"
        height="1.8em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4Zm11 8.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4zM2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"
        />
      </svg>
    ),
  };

  function open() {
    setIsOpen(true);
    setIsClick(true);
  }

  function close() {
    setIsOpen(false);
    setIsClick(false);
  }

  return (
    <>
      <motion.div
        className="flex flex-col items-center text-black"
        whileTap={{ scale: 0.9 }}
        animate={{
          opacity: isClick ? 1 : 0.5,
          scale: isClick ? 1.2 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button onClick={open}>
          {isClick ? icon.filledIcon : icon.outlinedIcon}
        </Button>
      </motion.div>

      <Dialog
        open={isOpen}
        as="div"
        className="lg:hidden relative z-50 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/80 p-6 py-8 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-lg font-medium text text-center text-black"
              >
                What are you looking for?
              </DialogTitle>
              <div className="flex flex-col gap-1">
                <Link href={"/phones"}  onClick={close}>Phone ?</Link>
                <Link href={"/laptop"}  onClick={close}>Laptop ?</Link>
                <Link href={"/headphone"}  onClick={close} >HeadPhone ?</Link>
                <Link href={"/accessories"} onClick={close}>Accessories ?</Link>
              </div>

              <div className="mt-4 text-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1 px-2 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
