import logo from '../../assets/Logo/logoParanomFleur.png';
import {useState} from "react";
// https://tailwindcomponents.com/component/free-tailwind-css-header-component
export const UiHeader2 = ({test = ["Game", "Collection"]}) => {

    const [selected, setSelected] = useState(test[0]);

    function getStyle(test) {
        if (selected === test)
            return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-neutral-800 cursor-pointer px-20 py-2.5 font-semibold text-xs leading-3 shadow-md rounded";
        else
            return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-20 py-2.5 font-semibold text-xs leading-3 shadow-md rounded";
    }

    function getStyle2(test) {
        if (selected === test)
            return "mr-5 text-gray-800 text-blue-500 font-semibold hover:text-blue-500 cursor-pointer";
        else
            return "mr-5 text-gray-800 font-semibold hover:text-blue-500 cursor-pointer";
    }

    function selectNew() {
        let newL = document.getElementById("list");
        newL.classList.toggle("hidden");

        document.getElementById("ArrowSVG").classList.toggle("rotate-180");
    }

    function selectedSmall(item) {
        let text = event.target.innerText;
        let newL = document.getElementById("list");
        let newText = document.getElementById("textClicked");
        newL.classList.add("hidden");
        document.getElementById("ArrowSVG").classList.toggle("rotate-180");
        newText.innerText = text;

        setSelected(item);
    }

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img src={logo} alt="Logo" width="250" height="250"/>
                    </div>

                    <div className="content-center">
                        <ul className="hidden md:flex flex-auto space-x-2 pt-2">
                            {test.map((item, id) =>
                                <li onClick={() => setSelected(item)}
                                    className={getStyle2(item)}
                                    key={id}
                                >
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div
                            className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                            </svg>

                            <div
                                className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                            <div
                                className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fillRule="evenodd"
                                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                  clipRule="evenodd"/>
                        </svg>


                    </div>
                </nav>

                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => selectNew()}
                         className="cursor-pointer px-4 py-3 text-white bg-neutral-800 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <p
                                id="textClicked"
                                className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{selected}</p>
                        </div>
                        <svg id="ArrowSVG" className=" transform" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list"
                            className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                            {test.map((item, id) =>
                                <li onClick={() => selectedSmall(item)}
                                    className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                                    key={id}
                                >
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}