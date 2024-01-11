import {UiSubHeader} from "../../components/SubHeader/UiSubHeader.jsx";
import {EaseOutWhenVisibleLeft} from "../../components/Motion/EaseOutWhenVisibleLeft.jsx";
import {UiStepper} from "../../components/Stepper/UiStepper.jsx";
import {EaseOutWhenVisibleDown} from "../../components/Motion/EaseOutWhenVisibleDown";
import ParanomBoomrang from "../../assets/Gif/ParanomBoomrang.gif"
import {UiTitle} from "../../components/Title/UiTitle.jsx";
import wallet from "../../assets/Image/wallet.png";
import fireworks from "../../assets/Image/fireworks.png";
import discussion from "../../assets/Image/discussion_talk.png";
import paranom from "../../assets/Image/Lelouch F.png";
import {UiButton} from "../../components/Button/UiButton.jsx";
import { useNavigate } from 'react-router-dom';

export const GamePage = () => {
    const navigate = useNavigate();
    const gifComponent = <img src={ParanomBoomrang} alt="ParanomBoomerang"
                              className="rounded-lg shadow-md border-8 border-violet-200 w-72 sm:w-80 lg:w-7/12 xl:w-5/12" />;

    const joinBattle = () => {
        console.log("Join");
        navigate('/channel');
    };

    const buttonComponent = <UiButton title="Connect" color="neutral" onClick={joinBattle} />;

    return (
        <div>
            <div className="mt-8">
                <EaseOutWhenVisibleDown>
                    <UiSubHeader title="Welcolme to Paranom"
                                 titleSecond="the NFT social network"
                                 subTitle="Start chatting anonymously with"
                                 subTitleSecond="users to exchange ideas and opinions"
                                 componentRight={gifComponent}
                                 componentInteractive={buttonComponent}

                    />
                </EaseOutWhenVisibleDown>
            </div>

            <div className="mt-10 pb-5">
                <EaseOutWhenVisibleLeft>
                    <div className="mb-10">
                        <UiTitle title="Get one and have fun"/>
                    </div>
                    <UiStepper data={data}/>
                </EaseOutWhenVisibleLeft>
            </div>

        </div>
    )
}

const data = [
    {
        title: "Set up your wallet",
        description: "Well, aren't you going up to the lake tonight, you've been planning it for two weeks.",
        tag: "STEP-01",
        img: wallet,
    },
    {
        title: "Chose a Paranom",
        description: "Well, aren't you going up to the lake tonight, you've been planning it for two weeks.",
        tag: "STEP-02",
        img: paranom,
    },
    {
        title: "Join the chat",
        description: "Well, aren't you going up to the lake tonight, you've been planning it for two weeks.",
        tag: "STEP-03",
        img: discussion,
    },
    {
        title: "Have fun",
        description: "Well, aren't you going up to the lake tonight, you've been planning it for two weeks.",
        tag: "STEP-04",
        img: fireworks,
    },
];