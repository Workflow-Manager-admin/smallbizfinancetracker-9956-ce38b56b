import React from "react";

/**
 * User management view.
 * PUBLIC_INTERFACE
 */
const Users = () => (
  <section className="users">
    <h2>Users</h2>
    <button className="btn btn-accent">Invite User</button>
    <div className="users-list">
      {/* Placeholder for users table/list */}
      <div>[Users List]</div>
    </div>
  </section>
);

export default Users;
