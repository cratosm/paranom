import paranom from "../../assets/Image/Amber F.png"
import logo from "../../assets/Logo/logoParanomFleurWhite.png"

export const UiCardImage = () => {
    return (
        <div className="group w-5/5 h-5/5 flex flex-col p-4 bg-white hover:bg-blue-100 rounded-lg">
            <div className="overflow-hidden">
                <img src={paranom} alt="cardImage" className="rounded-lg transform transition duration-500 group-hover:scale-105"/>
            </div>
            <h1 className="font-semibold text-lg text-neutral-500 mt-3">Paranom</h1>
            <p className="font-semibold text-sm text-black">Amber F</p>
            <img className="h-5 w-40 mt-6" alt="logoWhite" src={logo} />
        </div>
    )
}