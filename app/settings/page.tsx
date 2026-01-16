"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [deposit, setDeposit] = useState(10);
  const [enabled, setEnabled] = useState(true);

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <h1>Deposit Settings</h1>

      <div style={{ marginTop: 20 }}>
        <label>
          <strong>Deposit Amount (AED)</strong>
        </label>
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
          style={{ display: "block", marginTop: 8, padding: 8, width: "100%" }}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />{" "}
          Enable Deposit
        </label>
      </div>

      <div style={{ marginTop: 30 }}>
        <p>
          <strong>Current Status:</strong>
        </p>
        <p>Deposit Amount: AED {deposit}</p>
        <p>Deposit Enabled: {enabled ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
