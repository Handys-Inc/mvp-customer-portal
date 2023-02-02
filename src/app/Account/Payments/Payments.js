import React, { Fragment, useState } from "react";

import Header from "../../../components/Header/Header";

import AccountHeader from "../components/AccountHeader";

import Layout from "../../../components/Layout/Layout";

import { Tab } from "@headlessui/react";

import AllPayments from "./components/AllPayments";
import Payouts from "./components/Payouts";

import Tax from "./components/Tax";

import sack from "../../../assets/icons/sack.svg";
import Tips from "./components/Tips";

function Payments() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Layout showBottomNav={false}>
      <AccountHeader title="Payments & Payouts" />

      <div className="flex flex-col md:flex-row gap-5 md:gap-32 items-start justify-between  max-w-5xl mx-auto mb-5 md:mb-20 min-h-screen">
        <div className="flex-1 min-h-fit md:min-h-[20rem]">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div class="border-b border-mute">
              <Tab.List class="flex flex-wrap  -mb-px ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Payment</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Payout</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Taxes</span>
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={selected ? "tab-active" : "tab-inactive"}
                    >
                      <span className="ml-2">Tips</span>
                    </button>
                  )}
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels>
              {/* Payments */}
              <Tab.Panel>
                <AllPayments />
              </Tab.Panel>

              {/* Payouts */}
              <Tab.Panel>
                <Payouts />
              </Tab.Panel>

              {/* Taxes */}
              <Tab.Panel>
                <Tax />
              </Tab.Panel>

              {/* Tips */}
              <Tab.Panel>
                <Tips />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Tip */}
        <div className="flex-1">
          <div className="rounded-xl border border-faintGray shadow-xl p-5 mt-5 md:mt-20">
            <img className="my-5" src={sack} alt="sack" />
            <h3 className="text-semibold text-lg md:text-2xl">
              Make all payments through Handys
            </h3>
            <p className="text-sm md:text-base text-gray font-light mt-3">
              Always pay and communicate through Handys to ensure you're
              protected under our{" "}
              <span className="underline">Terms of Service</span>,{" "}
              <span className="underline">Payments Terms of Service</span>,
              cancellation, and other safeguards. <br />{" "}
              <span className="underline">Learn more</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Payments;
