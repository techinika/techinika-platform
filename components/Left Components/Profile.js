import Image from "next/image"
import Vector from "../../public/vector.png"

export const ShortProfile = () => {
    return (
        <div className="bg-white w-full rounded-md text-center">
                <div className="flex flex-col items-center py-5 px-2">
                    <Image className="rounded-full" src={Vector} width="100" height={100}/>
                    <h1 className="font-bold text-xl p-1">Cishahayo Songa Achille</h1>
                    <p>Building the future of technology.</p>
                </div>
                <hr></hr>
                <div className="py-5 px-5">
                    <div className="font-bold flex flex-row items-center">
                        <p>Total Articles</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                    <div className="font-bold flex flex-row items-center">
                        <p>Total Questions</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                    <div className="font-bold flex flex-row items-center">
                        <p>Total Answers</p>
                        <p className="text-blue-900 ml-auto">23</p>
                    </div>
                </div>
                <hr></hr>
                <div className="font-bold flex justify-center items-center p-4 text-blue-900">
                    <h1>Manage Profile</h1>
                </div>
            </div>
    )
}