const ReservationSideBar = () => {
    return (
        <aside className="mt-4 p-6 col-span-2 rounded-xl border border-gray-400 shadow-xl">
            <h2 className="mb-5 text-2xl">2500 грн за добу</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Гості</label>
                <select className="w-full ml-1 text-sm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-green-500 hover:bg-green-700 rounded-xl">
                Замовити
            </div>
            
            <div className="mb-4 flex justify-between align-center">
                <p>2500 * 4 доби</p>

                <p>10000 грн</p>

                
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Комісія сервісу</p>

                <p>300 грн</p>

                
            </div>

            <hr />
            <div className="mt-4 flex justify-between align-center font-bolt">
                <p>Всього:</p>

                <p>10 300 грн</p>

                
            </div>
        </aside>
    )
}

export default ReservationSideBar;