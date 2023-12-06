export const UiCard = ({title}) => {
    return (
            <div
                className="group max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                <p className="m-5 text-neutral-500">Step-01</p>
                <div className="p-5">
                    <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl md:text-lg mb-2">
                        {title}
                    </h2>
                    <p className="group-hover:text-yellow-700 text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've
                        been planning it for two weeks.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                              clipRule="evenodd"/>
                    </svg>

                </div>
            </div>
    )
}