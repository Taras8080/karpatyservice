import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";

const LandlordDetailPage = () => {
    return (
        <main className="max-w-[1500] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl botder border-gray-300 shadow-xl">
                        <Image
                            src="/profile_pic.png"
                            width={200}
                             height={200}
                            alt="Logo_profile"
                            className="rounded-full bg-gray-300"
                
                        />

                        <h1 className="mt-6 text-2xl">Ім'я профілю</h1>

                        <ContactButton />
                    </div>
                
                </aside>

                <div className="col-span-3 pl-0 md:pl-6">
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 botder border-gray-300 shadow-xl">
                        <PropertyList />
                    </div>
                </div>
                    
               
            </div>
        </main>
    )
}


export default LandlordDetailPage;