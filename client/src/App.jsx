import {UiHeader} from "./components/Header/UiHeader";
import {SubHeaderTest} from "./components/SubHeader/SubHeaderTest";

export default function App() {
    return (
        <div className="bg-neutral-900 min-h-screen">
            <UiHeader/>
            <div className={"pt-8"}>
                <SubHeaderTest/>
            </div>

            {/*<SubHeader/>*/}
        </div>

    )
}