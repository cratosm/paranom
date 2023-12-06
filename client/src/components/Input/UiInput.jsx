export const UiInput = () => {
    return (
            <div className="flex gap-4 justify-center md:justify-start">
                <input
                    className="h-12 min-w-[12rem] rounded-lg border-blue-300 indent-4 text-blue-900 shadow-lg focus:outline-none focus:ring focus:ring-blue-600"
                    type="text" placeholder="Designation"/>
                <button
                    className="h-12 min-w-[8rem] rounded-lg border-2 border-blue-300 bg-neutral-900 text-blue-50 shadow-lg hover:bg-blue-100 focus:outline-none focus:ring focus:ring-blue-600">Submit
                </button>
            </div>
    )
}