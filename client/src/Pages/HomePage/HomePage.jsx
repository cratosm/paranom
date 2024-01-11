import {UiHeader} from "../../components/Header/UiHeader.jsx";
import {itemSelectedState} from "../../Atoms/ItemSelectedState.jsx";
import {useRecoilState, useRecoilValue} from "recoil";
import {GamePage} from "../GamePage/GamePage";
import {CollectionPage} from "../CollectionPage/CollectionPage";
import {UiFooter} from "../../components/Footer/UiFooter";
import {BallsEffect} from "../../components/BallsEffect/BallsEffect.jsx";
import {UiModal} from "../../components/Modal/UiModal";
import {useState} from "react";
import {Warning} from "../../components/svg/Warning";
import {canLoadConfigState} from "../../Atoms/CanLoadConfigState.jsx";

export const HomePage = ({marketplace, nft, account}) => {
    const itemSelected = useRecoilValue(itemSelectedState);
    const [, setCanLoadConfig] = useRecoilState(canLoadConfigState);

    const [show, setShow] = useState(false);

    const connectWallet = async () => {
        if (window.ethereum) {
            setCanLoadConfig(true);
        }
        else
            setShow(true);
    }

    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader button={{ title: "Connect", color: "neutral", onClick: connectWallet }} />
                <UiModal showModal={show}
                         closeModal={() => setShow(false)}
                         title="Sorry..."
                         description="Wallet Not Detected"
                         btnTitle="Ok"
                         icon={<Warning color="red" variant="600"/>}
                />
                {itemSelected === "Game" ? <GamePage /> : <CollectionPage />}
                <BallsEffect />

                <UiFooter title="A NFT Card Game" />
            </div>
        </div>
    )
}