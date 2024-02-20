import React from "react";
import PropTypes from "prop-types";

type ListingData = {
  listing_id: number;
  url: string;
  image?: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}[];
const getPriceWithCurrency = (currencyCode: string, price: string) => {
  switch (currencyCode) {
    case "USD":
      return `$${price}`;
    case "EUR":
      return `€${price}`;
    case "GBP":
      return `£${price}`;
    case "CAD":
      return `C$${price}`;
    default:
      return `${currencyCode}${price}`;
  }
};
const titleFormat = (title: string) => {
  if (title.length > 50) {
    const cuttedTitle = title.substring(0, 50) + "...";
    return cuttedTitle;
  } else return title;
};
const Listing: React.FC<{ ListingData: ListingData }> = ({ ListingData }) => {
  console.log("ListingData", ListingData);
  // console.log("ListingData.length", ListingData.length);
  enum Sign {
    USD = "$",
    EUR = "€",
    GBP = "GBP",
  }
  const columns = [];
  for (let i = 0; i < ListingData.length; i += 3) {
    const columnItems = ListingData.slice(i, i + 3);
    columns.push(
      <div key={i} className='column'>
        {columnItems.map((item, index) => (
          <div key={item.listing_id} className='item-list'>
            <div className='item'>
              <div className='item-image'>
                <a href={item.url}>
                  <img src={item.image} alt='пикча' />
                </a>
              </div>
              <div className='item-details'>
                <p className='item-title'>{titleFormat(item.title)}</p>
                <p className='item-price'>
                  {/* {item.currency_code}
                  {item.price} */}
                  {getPriceWithCurrency(item.currency_code, item.price)}
                </p>
                {/* <p className='item-quantity level-medium'> */}
                <p
                  className={`item-quantity ${
                    item.quantity > 10
                      ? "level-high"
                      : item.quantity > 5
                      ? "level-medium"
                      : "level-low"
                  }`}
                >
                  {item.quantity} left
                </p>
                {/* {item.quantity} left
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <>{columns}</>;
};

export default Listing;
// const Listing: React.FC<{ ListingData: ListingData }> = ({ ListingData }) => {
//   console.log("ListingData", ListingData);
//   console.log("ListingData.length", ListingData.length);
//   return (
//     <div className='column'>
//       <div className='item-list'>
//         <div className='item'>
//           <div className='item-image'>
//             <a href='https://www.etsy.com/listing/292754135/woodland-fairy'>
//               <img src='https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg' />
//             </a>
//           </div>
//           <div className='item-details'>
//             <p className='item-title'>Woodland Fairy</p>
//             <p className='item-price'>$3.99</p>
//             <p className='item-quantity level-medium'>12 left</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listing;
