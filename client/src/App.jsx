import {SubHeaderTest} from "./components/SubHeader/SubHeaderTest";
import {UiHeader2} from "./components/Header/UiHeader2.jsx";

export default function App() {
    return (
        <div className="bg-gradient-to-r from-green-300 to-purple-400 min-h-screen">
            <UiHeader2 />
            <div className={"pt-8"}>
                <SubHeaderTest/>
            </div>

            {/*
            <UiHeader/>
            <SubHeader/>

            */}
        </div>

    )
}