import logo from '../../assets/Logo/logoParanomFleurBlack.png';
import {useEffect} from "react";
import {EaseOutWhenVisibleLeft} from "../Motion/EaseOutWhenVisibleLeft";
import { useRecoilState } from 'recoil';
import {itemSelectedState} from "../../Atoms/ItemSelectedState.jsx";


// https://tailwindcomponents.com/component/free-tailwind-css-header-component
export const UiHeader = ({items = ["Game", "Collection"]}) => {

    const [selected, setSelected] = useRecoilState(itemSelectedState);

    useEffect(() => {
        setSelected(items[0]);
    }, []);

    function getStyle1(test) {
        if (selected === test)
            return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-neutral-800 cursor-pointer px-20 py-2.5 font-semibold text-xs leading-3 shadow-md rounded";
        else
            return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-20 py-2.5 font-semibold text-xs leading-3 shadow-md rounded";
    }

    function getStyle2(test) {
        if (selected === test)
            return "z-40 mr-5 text-blue-500 font-semibold hover:text-blue-500 cursor-pointer";
        else
            return "z-40 mr-5 text-gray-800 font-semibold hover:text-blue-500 cursor-pointer";
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
        <div>
            <div className="py-5">
                <nav className="flex justify-between">
                    <div className="flex items-center justify-center space-x-3 lg:pr-16 pl-3">
                        <img src={logo} alt="Logo" className="w-40 " />
                    </div>

                    <div>
                        <div className="visible md:hidden flex z-40 cursor-pointer" onClick={() => selectNew()}>
                            <p className={getStyle2(selected)}
                               id="textClicked"
                            >
                                    {selected}
                            </p>
                            <svg id="ArrowSVG" className="transform z-50" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <ul className="hidden md:flex flex-auto space-x-2 pt-2">
                            {items.map((item, id) =>
                                <li onClick={() => setSelected(item)}
                                    className={getStyle2(item)}
                                    key={id}
                                >
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="flex space-x-5 justify-center items-center pl-2">
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

                <EaseOutWhenVisibleLeft>
                <div className="block md:hidden">
                    <div
                        className="hidden absolute z-30 w-56 py-2 mt-2 left-1/2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800" id="list">

                            {items.map((item, id) =>
                                <a onClick={() => selectedSmall(item)}
                                   href="#"
                                   className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                    key={id}
                                >
                                    {item}
                                </a>
                            )}

                    </div>
                </div>
                </EaseOutWhenVisibleLeft>
            </div>
            <hr />
        </div>
    )
}