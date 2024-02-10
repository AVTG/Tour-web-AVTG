import Cards from "./Cards";

function Tours({tours ,removeTour}) {
    return (
        <div class = "flex flex-col items-center mx-auto">
                <h2 class = "border-[7px] border-dashed border-[rgb(1,7,17)] text-[3rem] font-bold text-center m-[5rem] py-[1vh] rounded-3xl w-[60vw] mx-auto">AVTG ke Sath Ghumne Chalo</h2>

            <div class = "flex flex-wrap max-w-[68vw] items-start justify-center gap-7 mb-5">
                {
                    tours.map((item) => {
                        return (<Cards {...item} removeTour = {removeTour}></Cards>) ;
                    })
                }
            </div>
        </div>

    ) ;
}

export default Tours;