export const UiMyMessage = () => {
    return (
        <div className="">
            <div
                className="relative mr-3 max-w-[400px] rounded-md border border-sky-100 bg-blue-100 p-4 text-sm shadow-lg">
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <h4 className="pr-6 font-medium text-slate-900">
                            Me <span className="ml-2 font-normal text-slate-500">5 min ago</span>
                        </h4>
                        <div className="mt-1 text-slate-500">
                            Your team has made changes to your company profile since you last logged in.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}