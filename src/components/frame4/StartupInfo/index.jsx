import FirstCard from "./FirstCard"
import SecondCard from "./SecondCard"
import ThirdCard from "./ThirdCard"


const StartupInfo = () => {
    return (
        <div className='bg-[#F7F7F7] -mt-12 py-6 rounded-2xl'>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 px-4 max-w-[1100px] mx-auto my-12 md:my-16'>
                <div className='flex flex-col space-y-4 lg:w-1/3'>
                    <FirstCard />
                    <SecondCard />
                </div>
                <ThirdCard />
            </div>
        </div>
    )
}

export default StartupInfo
