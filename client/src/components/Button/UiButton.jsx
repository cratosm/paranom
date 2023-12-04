import {SizeButton} from "./SizeButton";

export const UiButton = ({title, size = SizeButton.S, color = "blue"}) => {
    return (
        <button
            className={`middle none center rounded-lg bg-${color}-500 ${size} font-sans text-xs font-bold uppercase text-white shadow-md shadow-${color}-500/20 transition-all hover:shadow-lg hover:shadow-${color}-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            data-ripple-light="true"
        >
            {title}
        </button>
    )
}