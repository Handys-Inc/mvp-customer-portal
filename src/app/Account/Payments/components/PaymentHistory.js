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
        <p>Paid for</p>
        <p>Payment method</p>
        <p>Amount</p>
      </div>
      <Border />
      {history.map((single) => {
        return (
          <div className="flex flex-row justify-between items-center text-sm my-3">
            <p>{single.name}</p>
            <p>{single.method}</p>
            <p>${single.amount} CAD</p>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentHistory;
