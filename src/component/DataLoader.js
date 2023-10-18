import React from "react";
import Loader from "react-js-loader";
export default function DataLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader
        type="spinner-circle"
        bgColor={"#fff"}
        title={"Loading..."}
        color={"#fff"}
        size={60}
      />
    </div>
  );
}
