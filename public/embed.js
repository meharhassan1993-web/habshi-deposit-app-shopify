/* ==============================
   Habshi Deposit Embed Script
   ============================== */

const deposit = {
  enabled: true,
  amount: 10
};

(function () {
  console.log("Habshi Deposit Embed Loaded ✅");

  function mount() {
    const root = document.getElementById("habshi-deposit-root");
    if (!root) {
      console.warn("Habshi Deposit: root not found");
      return;
    }

    // Render UI
    root.innerHTML = `
      <div style="
        border:1px solid #e5e5e5;
        padding:14px;
        margin-top:14px;
        border-radius:8px;
        font-family:Arial, sans-serif;
        background:#fafafa
      ">
        <strong style="display:block;margin-bottom:8px">
          Payment Option
        </strong>

        <label style="display:block;margin-bottom:6px;cursor:pointer">
          <input type="radio"
                 name="habshi_payment_option"
                 value="cod"
                 checked />
          Full Cash on Delivery
        </label>

        <label style="display:block;cursor:pointer">
          <input type="radio"
                 name="habshi_payment_option"
                 value="advance" />
          Pay AED ${deposit.amount} Advance
        </label>
      </div>
    `;

    // Default save
    localStorage.setItem("habshi_payment_option", "cod");
    localStorage.setItem("habshi_deposit_amount", deposit.amount);

    // Listen changes
    root.addEventListener("change", (e) => {
      if (e.target.name === "habshi_payment_option") {
        localStorage.setItem("habshi_payment_option", e.target.value);

        console.log(
          "Habshi Payment Selected:",
          e.target.value === "advance"
            ? `ADVANCE AED ${deposit.amount}`
            : "FULL COD"
        );
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
