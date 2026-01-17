(function () {
  console.log("Habshi Deposit Embed Loaded ✅");

  function mount() {
    const root = document.getElementById("habshi-deposit-root");
    if (!root) return;

    root.innerHTML = `
      <div style="
        border:1px solid #ddd;
        padding:12px;
        margin-top:12px;
        border-radius:8px;
        font-family:Arial
      ">
        <strong>Payment Option</strong><br/><br/>
        <label>
          <input type="radio" name="payment_option" value="cod" checked />
          Full Cash on Delivery
        </label><br/>
        <label>
          <input type="radio" name="payment_option" value="advance" />
          Pay AED 10 Advance
        </label>
      </div>
    `;

    root.addEventListener("change", (e) => {
      if (e.target.name === "payment_option") {
        localStorage.setItem("habshi_payment", e.target.value);
        console.log("Payment saved:", e.target.value);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
