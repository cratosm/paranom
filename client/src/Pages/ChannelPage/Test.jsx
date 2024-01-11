import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";
import {UiFooter} from "../../components/Footer/UiFooter.jsx";
import {UiTextArea} from "../../components/TextArea/UiTextArea";
import {UiMessage} from "../../components/Message/UiMessage";

export const Test = () => {

    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader items={["Channel"]} button={{ title: "Connect", color: "neutral" }} />
                <div className="pt-10">
                    <UiMessage />
                </div>
                <UiTextArea />
                <BallsEffect />
                <UiFooter title="A NFT Card Game" />
            </div>
        </div>
    )
}