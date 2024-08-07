import {Link} from "react-router-dom";

function FooterButtonGroup() {
    return (
        <>
            <div className="absolute left-[42.5em] bottom-[-14em] space-x-4">
                <button
                    type="button"
                    className="px-6 py-2 font-['raleway'] text-lg rounded-lg border-white border-1 bg-[#01458E] text-white shadow-md hover:bg-white hover:text-[#01458E] hover:font-bold "
                >
                    <Link to={"#"}>
                        APPLY
                    </Link>
                </button>
                <button
                    type="button"
                    className="px-6 py-2 text-lg font-['raleway'] rounded-lg border-white border-1 bg-[#01458E] text-white shadow-md hover:bg-white hover:text-[#01458E] hover:font-bold "
                >
                    <Link to={"#"}>
                        REQUEST INFO
                    </Link>
                </button>
                <button
                    type="button"
                    className="px-6 py-2 text-lg font-['raleway'] rounded-lg border-white border-1 bg-[#01458E] text-white shadow-md hover:bg-white hover:text-[#01458E] hover:font-bold "
                >
                    <Link to={"/VsgoiLMS"}>
                        REGISTER
                    </Link>

                </button>
                <button type="button"
                        className="px-6 py-2 text-lg font-['raleway'] font-medium text-white inline-flex items-center bg-[#01458E] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                    <svg className="w-3.5 h-3.5 text-white me-2 hover:bg-[#01458E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 16">
                        <path
                            d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path
                            d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                    <Link to={"#"}>
                        CHAT WITH US
                    </Link>
                </button>
            </div>
        </>
    )
}

export default FooterButtonGroup;