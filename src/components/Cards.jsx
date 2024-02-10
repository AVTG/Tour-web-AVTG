import { useState } from "react"

function Cards({id , name, info ,image , price , removeTour}){
    const [readmore , setReadmore] = useState(false) ;
    const description = readmore?info:`${info.substring(0,140)}....` ;

    function handleReadmore(){
        setReadmore(!readmore) ;
    }

    return (
        <div class = "w-[20rem] p-2 flex flex-col gap-1 shadow-md mx-auto border">
            <img src={image} alt="" class = "w-350px aspect-[1/1] object-cover"/>
            <div>
                <h4 class =  "text-green-500 font-extrabold text-lg ">₹ {price}</h4>
                <h4 class =  "font-extrabold text-lg  font-" >{name}</h4>
            </div>
            <div>
                {description}
                <span class = "text-blue-700 cursor-pointer" onClick={handleReadmore}>
                    {readmore ? "..Show Less" : "Read More"}
                </span>
            </div>

            <button class = " bg-red-300 w-[10rem] mx-auto my-3 py-2 hover:bg-red-600 text-black font-semibold hover:text-white transition-all duration-75 rounded-md" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    ) ;
}

export default Cards