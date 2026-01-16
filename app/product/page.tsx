'use client';

import { useState } from 'react';

export default function ProductPage() {
  const [payment, setPayment] = useState<'cod' | 'deposit'>('cod');

  return (
    <div style={{ padding: 40 }}>
      <h1>Product Page</h1>

      <div style={{ border: '1px solid #ccc', padding: 15, marginTop: 20 }}>
        <h3>Payment Option</h3>

        <label style={{ display: 'block', marginBottom: 8 }}>
          <input
            type="radio"
            name="payment"
            checked={payment === 'cod'}
            onChange={() => setPayment('cod')}
          />
          {' '}Full Cash on Delivery
        </label>

        <label style={{ display: 'block' }}>
          <input
            type="radio"
            name="payment"
            checked={payment === 'deposit'}
            onChange={() => setPayment('deposit')}
          />
          {' '}Pay AED 10 Deposit (Non-Refundable)
        </label>
      </div>
    </div>
  );
}
