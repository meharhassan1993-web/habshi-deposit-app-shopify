"use client";

import { useState } from "react";

export default function ProductPage() {
  const [payment, setPayment] = useState<"cod" | "deposit">("cod");

 const savePaymentOption = async () => {
  localStorage.setItem("payment_option", payment);

  await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      payment_option: payment,
    }),
  });

  alert("Payment option saved: " + payment);
};

  return (
    <div style={{ padding: 30 }}>
      <h1>Product Page</h1>

      <div style={{ marginTop: 20 }}>
        <h3>Payment Option</h3>

        <label style={{ display: "block", marginBottom: 10 }}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={payment === "cod"}
            onChange={() => setPayment("cod")}
          />
          {" "}Full Cash on Delivery
        </label>

        <label style={{ display: "block", marginBottom: 10 }}>
          <input
            type="radio"
            name="payment"
            value="deposit"
            checked={payment === "deposit"}
            onChange={() => setPayment("deposit")}
          />
          {" "}Pay AED 10 Advance 
        </label>

        <button
          onClick={savePaymentOption}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          Save Payment Option
        </button>
      </div>
    </div>
  );
}
