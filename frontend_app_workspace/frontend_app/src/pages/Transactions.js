import React from "react";

/**
 * Transactions management view.
 * PUBLIC_INTERFACE
 */
const Transactions = () => (
  <section className="transactions">
    <div className="section-header">
      <h2>Transactions</h2>
      <button className="btn btn-accent">Add Transaction</button>
    </div>
    <div className="transactions-table">
      {/* Placeholder for transactions table */}
      <div>[Table of Transactions]</div>
    </div>
  </section>
);

export default Transactions;
