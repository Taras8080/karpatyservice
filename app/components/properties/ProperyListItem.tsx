import Image from "next/image";

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                fill
                src='/hotel1.jpg'
                sizes="(max-width: 768px) 768px,(max-width: 1200px): 768px, 768px"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Готель з басейном"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Назва</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-600"><strong>2500 грн </strong>за добу</p>
            </div>
        </div>
    )
}

export default PropertyListItem;