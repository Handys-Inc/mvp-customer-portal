import React, { useContext } from "react";
import services from "../../../../services";
import Notify from "../../../../components/Notify/Notify";
import Loader from "../../../../utils/Loader";
import { AuthContext } from "../../../../contexts/AuthContext";


function DeactivateAccount() {

  const [loading, setLoading] = React.useState(false)

  const {logOut}  = useContext(AuthContext)

  const continueDec =() => {
    // 
    setLoading(true)
    services.deactivateAccount().then((res)=> {
      setLoading(false)
      Notify("success", "Account deactivated")
       logOut()
    }).catch((e) => {
      console.log("error", e)
      setLoading(false)
        Notify("error", e.response.message)
    })
  }

  return (
    <div>
      <p className="text-xl text-gray  mb-10 w-96 mx-auto">
        Are you sure you want to deactivate your handys account?
      </p>
      <button disabled={loading} onClick={() => continueDec()} className="w-full btn-primary">
        {" "}
       {loading ? <Loader/> : " Yes, deactivate my account" }
      </button>
    </div>
  );
}

export default DeactivateAccount;
