import Lelouch from "../../assets/Image/Piccolo H.png"
import logo from "../../assets/Logo/fleur.png"

export const UiCardProfile = () => {
    return (
        <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <img src={logo} alt="profile-picture" className="absolute w-20 z-20"/>
            <div
                className="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img src={Lelouch} alt="profile-picture"/>
            </div>
            <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    MParanom
                </h4>
                <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    Co-Founder
                </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
                <a
                    href="#instagram"
                    className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                >
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}