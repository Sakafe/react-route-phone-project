import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Phone_card from "./Phone_card";


const Phone = () => {
  const [phone,setPhone] = useState();
  const {id} = useParams();
  const phones = useLoaderData()

    useEffect(()=>{
      const findPhone = phones?.find(singlephone => singlephone.id === id)

      setPhone(findPhone);

    },[id,phones])
    console.log(phone)
    return (
        <div>
           <Phone_card data2={phone}/>
        </div>
    );
};

export default Phone;