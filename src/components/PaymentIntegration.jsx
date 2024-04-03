import React, { useState } from "react";
import { FormContainer } from "./styles";
import PaystackPop from "@paystack/inline-js";

const PaymentIntegration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_caf651a9be19d6c43831fc848bc81aa2714783cf",
      amount: amount * 100,
      email,
      firstName,
      lastName,

      onSuccess(transcation){
        let message = `Payment Complete!! Reference ${transcation.reference}`
        alert(message)

        setAmount("")
        setEmail("")
        setFirstName("")
        setLastName("")
      },

      onCancel(){
        alert("You are about to cancel the transaction!!!")
      }
    });
  };

  return (
    <FormContainer>
      <h1>make payment</h1>
      <form>
        <div className="formInput">
          <label htmlFor="first-name">first name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="last-name">last name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="email">email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="amount">amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" onClick={handlePayment}>
          pay
        </button>
      </form>
    </FormContainer>
  );
};

export default PaymentIntegration;
