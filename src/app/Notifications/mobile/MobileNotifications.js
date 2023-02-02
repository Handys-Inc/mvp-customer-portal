import React from "react";

import Layout from "../../../components/Layout/Layout";
import Notifications from "../Notifications";

function MobileNotifications() {
  return (
    <Layout>
      <div className="my-5">
        <h3 className="text-xl font-semibold">Notifications</h3>
      </div>
      <Notifications />
    </Layout>
  );
}

export default MobileNotifications;
