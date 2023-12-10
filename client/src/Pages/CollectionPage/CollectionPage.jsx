import {UiCardSlider} from "../../components/CardSlider/UiCardSlider.jsx";
import {EaseOutWhenVisibleLeft} from "../../components/Motion/EaseOutWhenVisibleLeft.jsx";
import {EaseOutWhenVisibleDown} from "../../components/Motion/EaseOutWhenVisibleDown.jsx";
import ParanomBoomrang from "../../assets/Image/Amber H.png";
import {UiTitle} from "../../components/Title/UiTitle.jsx";
import {UiSubHeader2} from "../../components/SubHeader/UiSubHeader2";

export const CollectionPage = () => {
    return (
        <div>
            <div className="mt-8">
                <EaseOutWhenVisibleDown>
                    <UiSubHeader2 title="Welcolme to Paranom"
                                 titleSecond="an art of Anonymity"
                                 subTitle="Immerse yourself in a series of"
                                 subTitleSecond="mysterious unique portraits"
                                 imgClassName="rounded-lg shadow-md border-8 border-violet-200 w-72 sm:w-80 lg:w-7/12 xl:w-8/12"
                                 image={ParanomBoomrang}
                    />
                </EaseOutWhenVisibleDown>
            </div>

            <div className="mt-10 pb-5">
                <EaseOutWhenVisibleLeft>
                    <UiTitle title="Top collection" />
                    <UiCardSlider />
                </EaseOutWhenVisibleLeft>
            </div>

            <div className="pb-5 mt-20">
                    <EaseOutWhenVisibleLeft>
                    <UiTitle title="Explore collection" />
                </EaseOutWhenVisibleLeft>
            </div>

        </div>
    )
}