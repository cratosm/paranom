import logoFleur from "../../assets/Logo/LogoSeparatedOneWhite.png"
import logoTitle from "../../assets/Logo/LogoSeparatedTwoWhite.png"

export const UiCardImage = ({image, title, description}) => {
    return (
        <div className="group w-5/5 h-5/5 flex flex-col p-4 bg-white hover:bg-blue-100 rounded-lg">
            <div className="overflow-hidden">
                <img src={image} alt="cardImage" className="rounded-lg transform transition duration-500 group-hover:scale-105"/>
            </div>
            <h1 className="font-semibold text-lg text-neutral-500 mt-3">{title}</h1>
            <p className="font-semibold text-sm text-black">{description}</p>
            <div className="flex">
                <img className="h-5 w-6 mt-6" alt="logoWhite" src={logoFleur} />
                <img className="h-5 w-28 mt-6 invisible group-hover:visible" alt="logoWhite" src={logoTitle} />
            </div>

        </div>
    )
}