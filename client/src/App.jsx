import {SubHeaderTest} from "./components/SubHeader/SubHeaderTest";
import {UiHeader2} from "./components/Header/UiHeader2.jsx";
import {Carousel} from "./components/Carousel/Carousel";
import {UiStepper} from "./components/Stepper/UiStepper.jsx";

export default function App() {
    return (
        <div className="bg-neutral-300 h-full flex items-start justify-center">
            <div className="h-full flex flex-col w-11/12 md:w-11/12 2xl:w-2/3">
                <UiHeader2 />
                <div className="mt-8">
                    <SubHeaderTest/>
                </div>

                <div className="mt-10">

                    <UiStepper />
                </div>
                <Carousel />
            </div>
        </div>

    )
}