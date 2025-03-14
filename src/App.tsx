function App() {

  return (
    <div className="container mx-auto relative">
        <div className="">
            <h1 className="text-5xl font-bold text-orange-400 text-center mt-20">Hello Tailwind</h1>

            <button className="bg-amber-500 hover:bg-orange-400 transition-colors ease-in-out duration-300 rounded-2xl mt-10 px-4 py-2 mx-auto block border border-white/50 border-solid">
                Click Me!
            </button>

            <div className="bg-blue-400 mt-6 w-24 h-32">
                Width and Height
            </div>

            <div className="flex items-center gap-5 my-5">
                <div className="bg-blue-300 w-30 h-30"></div>
                <div className="bg-blue-400 w-30 h-30"></div>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <div className="bg-blue-500 h-30"></div>
                <div className="bg-blue-600 h-30"></div>
            </div>

        </div>

        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
            <div className="bg-white/80 rounded w-1/2 absolute top-20 left-20">
                <h1 className="text-xl font-semibold">Modal</h1>
                <p>Lorem ipsum </p>
            </div>
        </div>
    </div>
  )
}

export default App
