export const UiInput = () => {
    return (
            <div className="flex gap-4 justify-center md:justify-start">
                <input
                    className="h-12 min-w-[12rem] rounded-lg border-neutral-300 indent-4 text-neutral-900 shadow-lg focus:outline-none focus:ring focus:ring-neutral-600"
                    type="text" placeholder="Designation"/>
                <button
                    className="h-12 min-w-[8rem] rounded-lg border-2 border-neutral-300 bg-neutral-900 text-neutral-50 shadow-lg hover:bg-neutral-600 focus:outline-none focus:ring focus:ring-neutral-600">Submit
                </button>
            </div>
    )
}