import React from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import FourStep from "./FourStep";

function ActiveSearch({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed top-20 inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed top-20 inset-0 overflow-y-auto">
          <div className="min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-100 -translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 translate-y-10"
              leaveTo="opacity-0 -translate-y-10"
            >
              <Dialog.Panel className="w-full bg-white h-32">
                <div className=" flex flex-row justify-between">
                  <FourStep />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ActiveSearch;
