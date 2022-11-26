import Image from "next/image"
import Dmc from "../../public/dmc.jpg"
import { NewQuestion } from "../newQuestion"

export const ContentSide = ({t}) => {
    return (
        <>
            <div className="w-2/4 rounded-md bg-white">
                <NewQuestion />
                <hr></hr>
                <div className="flex flex-col">
                    <div className="mt-2">
                        <div className="p-3">
                            <h1 className="font-bold text-xl py-2">What should we do to improve our services provided?</h1>
                            <p className="text-gray-400 text-xs pb-2">Written by Achille Songa on 20 November 2022</p>
                            <p>This is what can be done on international level of things and we can be able to use it for a lot more we want to use it for.</p>
                        </div>
                        <div className="w-12/12 rounded-lg">
                            <Image src={Dmc} layout="responsive" className="object" alt="content"/>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="mt-2">
                        <div className="p-3">
                            <h1 className="font-bold text-xl py-2">What should we do to improve our services provided?</h1>
                            <p className="text-gray-400 text-xs pb-2">Written by Achille Songa on 20 November 2022</p>
                            <p>This is what can be done on international level of things and we can be able to use it for a lot more we want to use it for.</p>
                        </div>
                        <div className="w-12/12 rounded-lg">
                            <Image src={Dmc} layout="responsive" className="object" alt="content"/>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="mt-2">
                        <div className="p-3">
                            <h1 className="font-bold text-xl py-2">What should we do to improve our services provided?</h1>
                            <p className="text-gray-400 text-xs pb-2">Written by Achille Songa on 20 November 2022</p>
                            <p>This is what can be done on international level of things and we can be able to use it for a lot more we want to use it for.</p>
                        </div>
                        <div className="w-12/12 rounded-lg">
                            <Image src={Dmc} layout="responsive" className="object" alt="content"/>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="mt-2">
                        <div className="p-3">
                            <h1 className="font-bold text-xl py-2">What should we do to improve our services provided?</h1>
                            <p className="text-gray-400 text-xs pb-2">Written by Achille Songa on 20 November 2022</p>
                            <p>This is what can be done on international level of things and we can be able to use it for a lot more we want to use it for.</p>
                        </div>
                        <div className="w-12/12 rounded-lg">
                            <Image src={Dmc} layout="responsive" className="object" alt="content"/>
                        </div>
                        <hr></hr>
                    </div>
                </div>
                
            </div>
        </>
    )
}