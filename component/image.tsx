import Image from "next/image"
import Link from "next/link"
export default function Images(){
    return(
        <div className="">
            <div className="relative">
                
                             <Image width="10" height="10" src="/img/sophia.svg" alt="image" className="w-auto relative mx-3" />
<Link href={"/"} className="abs"> hello world</Link>

                
               

               

            </div>
        </div>
    )
}