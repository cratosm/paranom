import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";
import {UiFooter} from "../../components/Footer/UiFooter.jsx";
import {UiTextArea} from "../../components/TextArea/UiTextArea";
import {UiMessage} from "../../components/Message/UiMessage";
import {UiMyMessage} from "../../components/Message/UiMyMessage.jsx";

export const Test = () => {

    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader items={["Channel"]} button={{ title: "Connect", color: "neutral" }} />
                <div className="flex-grow overflow-auto">
                    <div className="pt-10">
                        <UiMessage />
                    </div>
                </div>
                <div className="self-end pr-2 pb-2">
                    <UiMyMessage />
                </div>

                <UiTextArea />
                <BallsEffect />
                <UiFooter title="A NFT Card Game" />
            </div>
        </div>
    )
}