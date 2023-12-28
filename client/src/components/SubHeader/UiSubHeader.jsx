import {UiInput} from "../Input/UiInput";


export const UiSubHeader = ({title, titleSecond, subTitle, subTitleSecond, input, component}) => {
    const { placeholder, btnTitle, onClick } = input || {};

    return (
        <div>
            <div className="md:flex">
                <div className="md:w-1/2 flex items-center justify-center md:items-start md:justify-start">
                    <div className="md:pt-24">
                        <h1 className="text-dark font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug mb-3">
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
                        <p className="tracking-wide text-xl text-white font-semibold md:text-[18px] lg:text-[22px] xl:text-[28px]  leading-snug mb-3">
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
                                <UiInput btnTitle={btnTitle} placeholder={placeholder} onClick={onClick}/>
                            </div>
                        }
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center pt-10 md:pt-0 overflow-visible">
                    {component}
                </div>
            </div>
        </div>
    )
}