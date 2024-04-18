const SearchFilters = () => {
    return (
        <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Де?</p>
                        <p className="text-sm">Бажане місце розташування</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Час в'їзду</p>
                        <p className="text-sm">Додати дату</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Час виїзду</p>
                        <p className="text-sm">Додати дату</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Хто</p>
                        <p className="text-sm">Додати гостей</p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-red-400 hover:bg-red-600 rounded-full text-white">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </div>
            </div>
        </div>
    )
}


export default SearchFilters;