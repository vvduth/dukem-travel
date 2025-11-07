import { PricingTable } from "@clerk/nextjs";
import React from "react";

const PricingPage = () => {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-3xl my-5 text-center">Pricing Plans</h2>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <PricingTable />
      </div>
    </div>
  );
};

export default PricingPage;
