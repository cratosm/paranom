import {UiCard} from "../Card/UiCard.jsx";
import {UiTitle} from "../Title/UiTitle.jsx";

export const UiStepper = () => {
    return (
        <div>
            <div className="ml-10 pb-5">
                <UiTitle />
            </div>

            <div className="ml-10 grid grid-cols-4 gap-4">
                <UiCard title={"Set up your wallet"}/>
                <UiCard title={"Chose a Paranom"}/>
                <UiCard title={"Join a battle"}/>
                <UiCard title={"Have fun"}/>
            </div>
        </div>
    )
}