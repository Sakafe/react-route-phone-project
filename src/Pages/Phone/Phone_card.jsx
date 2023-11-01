/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { json } from "react-router-dom";
import swal from 'sweetalert';

const Phone_card = ({data2}) => {
    const{image,brand_name,phone_name} = data2 || {};
    const addedFavoritesArray = [];

    const handleAddtofavorite = ()=>{
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

          //jokhon kisu nai tokhon e if vitor dhukba
    if (!favoriteItems) {
        addedFavoritesArray.push(data2);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "You product added!", "success");
      }else{
         const isexist = favoriteItems.find(item=> item.id === data2.id);
         console.log(isexist); 
        if(!isexist){
          addedFavoritesArray.push(...favoriteItems,data2);
          localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
          swal("Good job!", "You product added!", "success");
        }else{
          swal("Error!", "Your product already added!", "error");
        }
        
      }

        // console.log(favoriteItems);
        // localStorage.setItem("test",JSON.stringify([{name :'i-phone'},{price :20}]))
    }
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
     {brand_name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   { phone_name}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a className="inline-block" href="#">
      <button onClick={handleAddtofavorite}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          // eslint-disable-next-line react/no-unknown-property
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            // eslint-disable-next-line react/no-unknown-property
            stroke-linecap="round"
            // eslint-disable-next-line react/no-unknown-property
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
          </div>
        </div>
    );
};

export default Phone_card;