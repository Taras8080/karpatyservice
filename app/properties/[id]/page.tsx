import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage = () => {
    return (
    <main className="max-w-[1500] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                fill
                src='/hotel1.jpg'
                className="object-cover w-full h-full"
                alt="Готель в горах"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">
                    Назва
                </h1>

                <span className="mb-6 block text-lg text-gray-700">
                    2-х місний номер з одним ліжком
                </span>

                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image
                    
                    src="/profile_pic.png"
                    width={60}
                    height={60}
                    className="rounded-full"
                    alt="Ім'я користувача"
                    />

                    <p><strong>Taras Fed </strong>автор оголошення</p>
                </div>

                <hr />
                
                <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laboriosam cupiditate ad nesciunt, 
                    atque non in distinctio? Voluptas, temporibus totam, praesentium excepturi amet molestias dolor 
                    necessitatibus ullam officia, voluptatem aliquam.
                </p>
            </div>

            <div className="col-span-2">
                <ReservationSidebar/>
            </div>
        </div>
    </main>
    )
}

export default PropertyDetailPage;