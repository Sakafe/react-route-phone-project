import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Phones from "../../Components/Phones/Phones";
// import useHook from "../../Hook/useHook";


const Home = () => {
    const phones = useLoaderData();

    // const [phones] = useHook();
    // console.log(phones);
    return (
        <div>
            <Banner/>
            <Phones data={phones}/>
        </div>
    );
};

export default Home;