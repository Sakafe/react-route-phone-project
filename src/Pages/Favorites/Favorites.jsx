import { useEffect, useState } from 'react';
import './Favorites.css'
import Favorites_card from './Favorites_card';

const Favorites = () => {
    const [favorites,setFavorites] = useState([]);
    const [noFound,setNoFound] = useState("");
    const [seeAll,setSeeAll] = useState(false);
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
        if(favoriteItems){
            setFavorites(favoriteItems);
            
            const total = favoriteItems.reduce((preValue,currentItem)=>preValue + currentItem.price,0)

            console.log(total);

            setTotalPrice(total);

        }else{
            setNoFound("No data found");
        }
    },[])
    const handleRemove = () =>{
        localStorage.clear();
        setFavorites([]);
        setNoFound("No data found");
    }
    return (
        <div>
            {noFound ? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> 
            : <div>
               <div>
                <div>
                {favorites.length > 0 && <button onClick={handleRemove} 
                className='px-5 my-5 bg-red-400 block mx-auto'>Deleted All Favorites</button>}
                <h1 className='px-5 my-5 mx-auto'>Total price : ${totalPrice}</h1>
                </div>
               
               <div className='grid grid-cols-2 gap-5'>
                    {/* For See all */}
                    {
                        seeAll ? favorites.map((phone)=> 
                        <Favorites_card key={phone.id} phoneData={phone}></Favorites_card>)
                        : favorites.slice(0,2).map((phone)=> 
                        <Favorites_card key={phone.id} phoneData={phone}></Favorites_card>)
                    }
                     {/* For Add to Favorite */}
                    {/* {favorites.map((phone)=> <Favorites_card key={phone.id} phoneData={phone}></Favorites_card>)} */}
                </div>
                {
                    favorites.length >2 && <button onClick={()=>setSeeAll(!seeAll)} className='px-5 bg-green-200 block mx-auto my-5'>
                    {seeAll ? "See less" : "See more"}</button>
                }
               </div>
              </div>}
        </div>
    );
};

export default Favorites;