import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LMSCards({icon, title, description, url}) {
    return (
        <div className="max-w-sm mx-auto my-6 font-['raleway'] rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="px-7 py-6 h-[20em] w-[20em]">
                <div className="flex mb-4">
                    <img
                        src={icon}
                        alt="Student Icon"
                        className="h-[5em] "
                    />
                </div>
                <h1 className="text-3xl font-bold drop-shadow-md text-[#01458E]">{title}</h1>
                <p className=" text-gray-700 mt-3 text-[18px]">
                    {description}
                </p>
            </div>
            <div className="px-6 py-8 mt-10">
                <button
                    type="button"
                    className="px-6 py-2 text-lg rounded-full border-white border-1 bg-[#01458E] text-white shadow-lg hover:border-2 hover:border-[#01458E] hover:bg-white hover:text-[#01458E] hover:font-bold "
                >
                    <Link to={url}>
                        Login Now
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default LMSCards;
