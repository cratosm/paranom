import {UiHeader} from "./components/Header/UiHeader";
import {SubHeaderTest} from "./components/SubHeader/SubHeaderTest";

export default function App() {
    return (
        <div className="bg-gradient-to-r from-green-300 to-purple-400 min-h-screen">
            <UiHeader/>
            <div className={"pt-8"}>
                <SubHeaderTest/>
            </div>

            {/*<SubHeader/>*/}
        </div>

    )
}