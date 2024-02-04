import React from "react";
import Header from "./header/Header";
import "./ContainerApp.css";

export default function ContainerApp({ children }) {
  return (
    <div className="container-app">
      <Header />
      <div className="content-app">{children}</div>
    </div>
  );
}
