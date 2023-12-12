import paraDaft from "../../assets/Collection/Daft Punk Jaune H.png";
import paraLelouch from "../../assets/Collection/Lelouch F.png";
import paraFreddy from "../../assets/Collection/Freddy Mercury F.png";
import paraKill from "../../assets/Collection/Kill Bill H.png";
import paraSpiderman from "../../assets/Collection/Spiderman B H.png";
import paraAmber from "../../assets/Collection/Amber H.png";
import {UiCardImage} from "../Card/UiCardImage";

export const UiGallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data.map((item, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                    <UiCardImage title={item.name} description={item.description} image={item.img} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
};


const data = [
    {
        name: `Daft`,
        img: paraDaft,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Lelouch`,
        img: paraLelouch,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Freddy`,
        img: paraFreddy,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Kill Bill`,
        img: paraKill,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Spiderman`,
        img: paraSpiderman,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Amber H`,
        img: paraAmber,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Kill Bill`,
        img: paraKill,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Spiderman`,
        img: paraSpiderman,
        description: `Lorem ipsum dolor sit amet`
    },
    {
        name: `Amber H`,
        img: paraAmber,
        description: `Lorem ipsum dolor sit amet`
    },

];