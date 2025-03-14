export function Part2() {
    return <div className="container mx-auto mt-20">
        <h1 className="text-center font-bold text-xl">Channel: </h1>
        <input
            type="text"
            placeholder="enter text"
            className="outline-0 border border-solid border-white/50 transition-colors ease-in-out duration-300 mx-auto block mt-10 px-3 py-1.5 rounded focus:border-orange-400"/>
        <button className="bg-amber-500 hover:bg-orange-400 transition-colors ease-in-out duration-300 rounded-2xl mt-10 px-4 py-2 mx-auto block border border-white/50 border-solid">
            Click Me!
        </button>
    </div>
}