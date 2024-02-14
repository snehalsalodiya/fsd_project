import { AiOutlineSearch } from "react-icons/ai";
import Button from "./button";
export const IntroSql = () => {

    return(
        <>


    <Button/>        
       <button
            type="button"
            className="bg-gradient-to-r from-lime-500 to-green-600 text-white font-sans py-2 px-4 rounded-full inline-flex items-center hover:shadow-md focus:ring-2 focus:ring-green-500"
            title="Open SQL Lab for practical session"
            onClick={() => window.location.href = '/lab1'}
            >
            <AiOutlineSearch />
            Start SQL Lab
        </button>
        </>
    );
};