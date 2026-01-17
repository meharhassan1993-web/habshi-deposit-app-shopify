document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("habshi-deposit-root");

  if (!root) return;

  root.innerHTML = `
    <div style="border:1px solid #ddd;padding:12px;margin-top:12px">
      <strong>Payment Option</strong><br/><br/>

      <label>
        <input type="radio" name="habshi_pay" value="cod" checked />
        Full Cash on Delivery
      </label><br/>

      <label>
        <input type="radio" name="habshi_pay" value="advance" />
        Pay AED 10 Advance
      </label>
    </div>
  `;

  document.querySelectorAll('input[name="habshi_pay"]').forEach(el => {
    el.addEventListener("change", (e) => {
      const value = e.target.value;

      if (value === "advance") {
        localStorage.setItem("habshi_payment", "advance");
        // yahan baad mein discount auto-apply hoga
        alert("Advance payment selected");
      } else {
        localStorage.setItem("habshi_payment", "cod");
        alert("Cash on Delivery selected");
      }
    });
  });
});
