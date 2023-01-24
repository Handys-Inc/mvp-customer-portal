import React from "react";
import Border from "../../../../components/Border/Border";

function PaymentHistory() {
  let history = [
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 105 },
    {
      name: "Sandra Leah, Plumber",
      method: "Credit or Debit Card",
      amount: 85,
    },
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 195 },
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 45 },
    { name: "Sandra Leah, Plumber", method: "Paypal", amount: 195 },
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 15 },
    {
      name: "Sandra Leah, Plumber",
      method: "Credit or Debit Card",
      amount: 95,
    },
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 195 },
    { name: "John Doe, Painter", method: "Credit or Debit Card", amount: 5 },
    { name: "John Doe, Painter", method: "Paypal", amount: 19 },
    {
      name: "Sandra Leah, Plumber",
      method: "Credit or Debit Card",
      amount: 5,
    },
  ];
  return (
    <div className="text-gray">
      <Border />
      <div className="flex justify-between items-center font-semibold">
        <p className="flex-1 text-left">Paid for</p>
        <p className="flex-1">Payment method</p>
        <p className="flex-1 text-right">Amount</p>
      </div>
      <Border />
      {history.map((single) => {
        return (
          <div className="flex flex-row justify-between items-center text-sm my-3">
            <p className="flex-1 text-left">{single.name}</p>
            <p className="flex-1">{single.method}</p>
            <p className="flex-1 text-right"> ${single.amount} CAD</p>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentHistory;
