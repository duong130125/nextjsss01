import React from "react";

/*
NextJS có 2 loại component:
1. server component
2. client component
*/
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
}
fetchData();

export default async function page() {
  let dataUser: any = await fetchData();
  return (
    <div>
      {dataUser?.map((item: any) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}
