/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Rating from 'react-rating'

// eslint-disable-next-line react/prop-types
const Phones_card = ({phone}) => {
    const {id,phone_name,image,rating,brand_name,price} = phone || {};
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="p-6">
  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {brand_name}
      </p>
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {phone_name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
     <Rating initialRating={rating} readonly/>
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/phones/${id}`} state={phone_name}>
    <button
      className="bg-gray-300 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Favorite
    </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Phones_card;