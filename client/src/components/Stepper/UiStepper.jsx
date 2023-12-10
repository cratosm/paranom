import {UiCard} from "../Card/UiCard.jsx";
import {UiTitle} from "../Title/UiTitle.jsx";
import wallet from "../../assets/Image/wallet.png";
import paranom from "../../assets/Image/Lelouch F.png";
import battle from "../../assets/Image/battle.png";
import fireworks from "../../assets/Image/fireworks.png";

export const UiStepper = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <UiCard title="Set up your wallet" description="STEP-01" image={wallet}/>
                <UiCard title="Chose a Paranom" description="STEP-02" image={paranom} className="col-span-full"/>
                <UiCard title="Join a battle" description="STEP-03" image={battle} className="col-span-full"/>
                <UiCard title="Have fun" description="STEP-04" image={fireworks} className="col-span-full"/>
            </div>
        </div>
    )
}