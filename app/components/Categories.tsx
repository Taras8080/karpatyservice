import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/pool.png'
                    alt='Category - pool'
                    width={24}
                    height={24}
                />
                <span className="text-xs">Басейни</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/hotel.png'
                    alt='Category - hotel'
                    width={24}
                    height={24}
                />
                <span className="text-xs">Готелі</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/pool.png'
                    alt='Category - pool'
                    width={24}
                    height={24}
                />
                <span className="text-xs">Особняки</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/pool.png'
                    alt='Category - pool'
                    width={24}
                    height={24}
                />
                <span className="text-xs">Кімнати</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/pool.png'
                    alt='Category - pool'
                    width={24}
                    height={24}
                />
                <span className="text-xs">Басейни</span>
            </div>
        </div>
    )
}


export default Categories;