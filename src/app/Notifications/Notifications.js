import React from "react";

function Notifications() {
  const notifs = [
    {
      info: "Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can request a new confirmation email or change your email address.",
      date: "6 days ago",
    },
    {
      info: "Service provider just marked a job as completed. Please leave a review",
      date: "30 minutes ago",
    },
    {
      info: "We failed to charge your credit card. Please check it",
      date: "2 days ago",
    },
    {
      info: "Your service request has been matched with a provider",
      date: "10 seconds ago",
    },
  ];
  return (
    <div>
      {notifs.map((single, index) => {
        return (
          <div key={index} className="flex gap-5 mb-5">
            <div className="border rounded-full border-mute w-8 h-8 p-3 text-xs flex items-center justify-center">
              M
            </div>
            <div>
              <p className="text-sm"> {single.info}</p>
              <p className="text-gray text-xs mt-2">{single.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
