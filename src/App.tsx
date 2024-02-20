import React, { useState } from "react";
import Listing from "./components/Listing";
import "./App.css";
import data from "./Data/esty.json";

function App() {
  const newData = data.map((item) => {
    const listing_id = item.listing_id || 0;
    const url = item.url || "";
    const image = item.MainImage?.url_570xN || "";
    const title = item.title || "";
    const currency_code = item.currency_code || "";
    const price = item.price || "";
    const quantity = item.quantity || 0;
    return {
      listing_id,
      url,
      image,
      title,
      currency_code,
      price,
      quantity,
    };
  });
  return (
    <div className='App'>
      <div className='container'>
        <Listing ListingData={newData} />
      </div>
    </div>
  );
}

export default App;
