import {UiInput} from "../Input/UiInput";
import MParanom from "../../assets/Image/MParanom.png"
import Amber from "../../assets/Image/Amber H.png"

export const UiSubHeader2 = ({title, titleSecond, subTitle, subTitleSecond, input, image, imgClassName}) => {
    return (
        <div className="overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2 flex items-center justify-center md:items-start md:justify-start">
                    <div className="md:pt-24">
                        <h1 className="text-dark font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-snug mb-3">
                            {titleSecond ? (
                                <span>
                                    {title}
                                    <br />
                                    {titleSecond}
                                </span>
                            ) : (
                                title
                            )}
                        </h1>
                        <p className="tracking-wide text-xl text-white font-semibold md:text-[18px] lg:text-[22px] xl:text-[28px] 2xl:text-[30px] leading-snug mb-3">
                            {subTitle ? (
                                <span>
                                    {subTitle}
                                    <br />
                                    {subTitleSecond}
                                </span>
                            ) : (
                                subTitle
                            )}
                        </p>
                        {input &&
                            <div className="mt-7 xl:ml-2 ">
                                <UiInput />
                            </div>
                        }
                    </div>
                </div>
                <div className="bg-black md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
                    <div
                        className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-28 -mb-24 ml-3 rounded-lg"
                                 style={{
                                     background: 'white',
                                     transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                     opacity: 0.2
                                 }}
                            ></div>
                            <div className="block absolute w-48 h-48 top-0 right-28 rounded-lg"
                                 style={{
                                     background: 'white',
                                     transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                     opacity: 0.2
                                 }}
                            ></div>
                            <img className="relative w-40"
                                 src={MParanom}
                                 alt=""/>
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">Indoor</span>
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">Peace Lily</span>
                                <span
                                    className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                            </div>
                        </div>
                    </div>
                    <img src={image} alt="ParanomBoomerang" className={imgClassName} />
                </div>
            </div>
        </div>
    )
}