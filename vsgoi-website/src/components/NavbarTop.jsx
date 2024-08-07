import {Link} from "react-router-dom";

const leftMenuItems = [
    { name: 'Students', href: '#' },
    { name: 'Faculty', href: '#' },
];

const middleMenuItems = [
    { name: 'Apply', href: '#' },
    { name: 'Placement', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Department', href: '#' },
];


// eslint-disable-next-line react/prop-types
export function NavbarTop({className}) {
   return (
        <div className={`relative left-[11em] bg-[#6F9ECF80] w-[1200px] h-[37px] rounded-md font-['raleway'] shadow-lg ${className}`}>
            <div className="flex max-w-7xl items-center  px-2 py-1 sm:px-6 lg:px-4">
                <div className="hidden lg:flex mr-10 ml-[2rem]" id="start">
                    <ul className="inline-flex space-x-5">
                        {leftMenuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-md drop-shadow-md text-[#01458E] font-semibold uppercase hover:text-blue-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex flex-1 mr-10" id="middle">
                    <ul className="inline-flex space-x-4 ml-14" >
                        {middleMenuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-md drop-shadow-md text-[#01458E] font-semibold uppercase hover:text-blue-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex flex-1 " id="end">
                    <div className="flex items-center space-x-3 ml-12">
                        <input
                            className="h-7 w-[250px] rounded-md bg-gray-200 px-3 py-2 text-sm placeholder:text-gray-600 shadow-md border-2  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01458E]"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            type="button"
                            className="h-7 rounded-md border-[#01458E] px-4 border-2 font-bold text-[#01458E] shadow-md hover:bg-[#01458E] hover:text-white "
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;
