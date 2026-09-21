"use client";

import { useState } from "react";

interface Users {
  users: [];
}

export default function Counter({ users }: Users) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => (c += 1))}>{count}</button>
    </div>
  );
}
