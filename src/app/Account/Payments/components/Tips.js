import React, { useState } from "react";

import Border from "../../../../components/Border/Border";

import { Switch } from "@headlessui/react";

function Tips() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="max-w-5xl mx-auto my-10 mb-32">
      <h3 className="text-2xl font-bold mb-1">Tips</h3>
      <p className="text-lg text-gray font-light mb-5">
        To show their appreciation for great work, customers can send an
        optional financial contribution to a service provider after completing a
        task. You can choose to automatically allow or decline future tips from
        customers.
      </p>

      {/* Allow tips */}
      <div className="my-5 flex justify-between items-center">
        <p>Allow Tips</p>

        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-primary" : "bg-gray"}
          relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>

      <Border />

      {/* tips terms */}
      <p className="text-sm text-gray">
        100% of all tips will be deposited into your payout account, unless you
        have an account balance. Your payout is subject to the{" "}
        <span className="underline">Payment Terms of Service</span> . Please
        note that contributions may not be tax deductible or eligible for tax
        credits.
      </p>

      <p className="mt-5 text-sm">
        To learn more about tips visit the{" "}
        <span className="underline">Help Center</span>
      </p>
    </div>
  );
}

export default Tips;
