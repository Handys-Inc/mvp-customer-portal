import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function UpdatePassword() {
  // password handling
  const [passwordShown, setPasswordShown] = useState(false);

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
          className="auth-input"
          type={passwordShown ? "text" : "password"}
          placeholder="Confirm Password"
          autoComplete="off"
        />
      </div>

      <button className="btn-primary w-full"> Update Password</button>
    </div>
  );
}

export default UpdatePassword;
