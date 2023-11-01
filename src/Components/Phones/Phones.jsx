/* eslint-disable react/prop-types */

import useHook from "../../Hook/useHook";
import Phones_card from "./Phones_card";


const Phones = ({data}) => {
    const getHook = useHook();
    console.log(getHook);

    // console.log(data);
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All categories phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    data ?.map((phone,id)=> <Phones_card key={id} phone={phone}></Phones_card>)
                }
            </div>
        </div>
    );
};

export default Phones;