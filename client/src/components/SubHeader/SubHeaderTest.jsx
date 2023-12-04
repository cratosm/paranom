export const SubHeaderTest = () => {
    return (
        <div className="max-w-auto bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover md:w-48"
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
                    <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus ex ut accumsan sagittis.
                    </p>
                </div>
            </div>
        </div>
    )
}