import {UiCardSlider} from "../../components/CardSlider/UiCardSlider.jsx";
import {EaseOutWhenVisibleLeft} from "../../components/Motion/EaseOutWhenVisibleLeft.jsx";
import {EaseOutWhenVisibleDown} from "../../components/Motion/EaseOutWhenVisibleDown.jsx";
import {UiTitle} from "../../components/Title/UiTitle.jsx";
import {UiCardProfile} from "../../components/Card/UiCardProfile.jsx";
import matthias from "../../assets/Collection/PP/Matthias.png";
import thomas from "../../assets/Collection/PP/Thomas.png";
import henri from "../../assets/Collection/PP/Henri.png";
import {UiSubHeader} from "../../components/SubHeader/UiSubHeader.jsx";
import {UiGallery} from "../../components/Gallery/UiGallery";

export const CollectionPage = () => {
    const profilesComponent = (
        <div className="flex">
            <div className="rotate-[-10deg]">
                <UiCardProfile image={matthias} title="MParanom" description="Digital" />
            </div>
            <div className="hidden sm:block z-20">
                <UiCardProfile image={thomas} title="TParanom" description="Art" />
            </div>
            <div className="rotate-[10deg]">
                <UiCardProfile image={henri} title="HParanom" description="Anonymity" />
            </div>
        </div>
    );

    return (
        <div>
            <div className="mt-8">
                <EaseOutWhenVisibleDown>
                    <UiSubHeader title="Welcolme to Paranom"
                                 titleSecond="an art of Anonymity"
                                 subTitle="Immerse yourself in a series of"
                                 subTitleSecond="mysterious unique portraits"
                                 componentRight={profilesComponent}
                    />
                </EaseOutWhenVisibleDown>
            </div>

            <div className="mt-16 md:mt-40 pb-5">
                <EaseOutWhenVisibleLeft>
                    <UiTitle title="Top collection" />
                    <UiCardSlider />
                </EaseOutWhenVisibleLeft>
            </div>

            <div className="pb-5 mt-20">
                <EaseOutWhenVisibleLeft>
                    <UiTitle title="Explore collection" />
                    <UiGallery />
                </EaseOutWhenVisibleLeft>
            </div>

        </div>
    )
}