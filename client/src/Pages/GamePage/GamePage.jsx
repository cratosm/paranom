import {UiSubHeader} from "../../components/SubHeader/UiSubHeader.jsx";
import {EaseOutWhenVisibleLeft} from "../../components/Motion/EaseOutWhenVisibleLeft.jsx";
import {UiStepper} from "../../components/Stepper/UiStepper.jsx";
import {EaseOutWhenVisibleDown} from "../../components/Motion/EaseOutWhenVisibleDown";
import ParanomBoomrang from "../../assets/Gif/ParanomBoomrang.gif"
import {UiTitle} from "../../components/Title/UiTitle.jsx";

export const GamePage = () => {
    const gifComponent = <img src={ParanomBoomrang} alt="ParanomBoomerang"
                              className="rounded-lg shadow-md border-8 border-violet-200 w-72 sm:w-80 lg:w-7/12 xl:w-5/12" />;

    return (
        <div>
            <div className="mt-8">
                <EaseOutWhenVisibleDown>
                    <UiSubHeader title="Welcolme to Paranom"
                                 titleSecond="a web3 NFT card Game"
                                 subTitle="Connect your wallet to start playing"
                                 subTitleSecond="the ultimate Web3 Battle Card Game"
                                 component={gifComponent}
                                 input
                    />
                </EaseOutWhenVisibleDown>
            </div>

            <div className="mt-10 pb-5">
                <EaseOutWhenVisibleLeft>
                    <UiTitle title="Get one and have fun"/>
                    <UiStepper />
                </EaseOutWhenVisibleLeft>
            </div>

        </div>
    )
}