export const UiMessage = () => {
    return (
        <div className="">
            <div
                className="relative mr-3 max-w-[400px] rounded-md border border-slate-50 bg-white p-4 text-sm shadow-lg">
                <div className="flex space-x-4">
                    <div className="relative h-10 w-10">
                        <img
                            className="h-full w-full rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <h4 className="pr-6 font-medium text-slate-900">
                            Palma Majorque <span className="ml-2 font-normal text-slate-500">5 min ago</span>
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