import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import services from "../../../../services";
import Notify from "../../../../components/Notify/Notify";
import Loader from "../../../../utils/Loader";

function UpdatePassword() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

  const [oldPass, setOldPass] = useState("")
  const [newPass, setNewpass] = useState("")
  const [again, setAgain] = useState("")

  const [loading, setLoading] = useState(false)

  const update = () => {
    setLoading(true)
   services.updatePassword(oldPass, newPass).then((res) => {
    setLoading(false)
    console.log("updating password", res)
    Notify("success", res.data.message)
   }).catch((e) => {
    setLoading(false)
     Notify("error", "An error occured")
    console.log("err updating passwrd", e)
   })
  }

  return (
    <div className="my-5">
     
      <div className="relative mt-5 mb-3">
       
        <span
          className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
          onClick={() => setPasswordShown(!passwordShown)}
        >
          {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <input
        value={oldPass}
        onChange={(e) => setOldPass(e.target.value)}
          className="auth-input"
          type={passwordShown ? "text" : "password"}
          placeholder="Current Password"
          autoComplete="off"
        />
      </div>

      {/* New Password */}
      <div className="relative mt-5 mb-3">
        <span
          className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
          onClick={() => setPasswordShown(!passwordShown)}
        >
          {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <input
        value={newPass}
        onChange={(e) =>setNewpass(e.target.value)}
          className="auth-input"
          type={passwordShown ? "text" : "password"}
          placeholder="New Password"
          autoComplete="off"
        />
      </div>

      {/* confirm password */}
      <div className="relative mt-5 mb-3">
        <span
          className="text-gray absolute cursor-pointer right-4 mt-4 ml-5"
          onClick={() => setPasswordShown(!passwordShown)}
        >
          {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <input
        value={again}
       onChange={(e) => setAgain(e.target.value)}
          className="auth-input"
          type={passwordShown ? "text" : "password"}
          placeholder="Confirm New Password"
          autoComplete="off"
        />
      </div>

      <button disabled={loading || ((newPass !== again)) } onClick={()=> update()} className="btn-primary w-full"> {loading? <Loader/> : "Update Password" }</button>
    </div>
  );
}

export default UpdatePassword;
