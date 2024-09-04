"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((rep) => rep.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {user?.map((item: any) => {
        return <li>{item.title}</li>;
      })}
    </div>
  );
}
