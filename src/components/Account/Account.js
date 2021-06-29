import React, { Fragment, useState } from "react";
import "./account.css";
import Modal from "./../UI/Modal";

const Account = (props) => {
  const [otp, setotp] = useState(false);
  const otpHandler = (event) => {
    event.preventDefault();
    setotp(true);
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <Modal onClick={props.onClick}>
        <div className="acc-wrapper">
          <div className="head">
            {!otp ? <h2>Mobile Varification</h2> : <h2>Verify Otp</h2>}
            <span onClick={props.onClick}>-</span>
          </div>
          <form onSubmit={otpHandler}>
            {!otp && (
              <input
                type="number"
                className="input-edit"
                placeholder="Enter your mobile number"
              ></input>
            )}
            {otp && (
              <input
                type="number"
                className="input-edit"
                placeholder="Enter OTP"
              ></input>
            )}

            <div className="submit-btn">
              {!otp && <button className="submit">Send OTP</button>}
              {otp && (
                <button className="submit" onClick={props.onClick}>
                  Verify
                </button>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Account;
