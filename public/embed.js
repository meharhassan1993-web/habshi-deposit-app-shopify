const root = document.getElementById("habshi-deposit-root");

if (root) {
  root.innerHTML = `
    <div style="margin-top:15px">
      <label>
        <input type="radio" name="paytype" value="cod" checked />
        Full Cash on Delivery
      </label><br/>
      <label>
        <input type="radio" name="paytype" value="advance" />
        Pay AED 10 Advance
      </label>
    </div>
  `;
}
