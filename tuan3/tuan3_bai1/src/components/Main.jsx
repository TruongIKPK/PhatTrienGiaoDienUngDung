import Filter from './Filter'
import no_find from '../assets/no_find.png'
function Main(){
    return (
        <>
            <div className="mt-30 flex" id="section">
                <Filter/>
                <div className="flex-1 flex flex-col items-center text-center">
                    {/* Nếu không tìm thấy */}

                    
                        <div className='items-center text-center'>

                            <p className="text-2xl font-bold">Sorry, no results were found for "cakescascasa"</p>
                            <img src={no_find} alt="" className="mt-4" />
                            <p className="">We have all your Independence Day sweets covered</p>
                            <div id="option" className='m-5 space-x-2'>
                                <button className='!bg-pink-100 text-pink-400'>Sweet Cake</button>
                                <button className='!bg-purple-200 text-purple-400'>Black Cake</button>
                                <button className='!bg-pink-300 text-pink-400'>Pozole Verde</button>
                                <button className='!bg-green-200 text-green-600'>Healthy food</button>
                            </div>   

                        </div> 
                   

                    {/* Nếu tìm thấy */}

                    
                </div>

            </div>
        </>
    )
}
export default Main;