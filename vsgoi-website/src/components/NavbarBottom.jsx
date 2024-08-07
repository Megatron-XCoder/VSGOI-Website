import {Link} from "react-router-dom";

const menuItems = [
    { name: 'Academics', href: '#' },
    { name: 'Admission', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Examination', href: '#' },
    { name: 'About us', href: '#' },
];

export function NavbarBottom() {
    return (
        <div className="relative left-[10em] bg-[#01458E] w-[1240px] h-[63px] rounded-md font-['raleway'] font-extrabold shadow-lg">
            <div className="flex max-w-7xl items-center justify-between px-1.5 py-1.5 sm:px-2 lg:px-8">
                <div className="flex items-center">
                    <img src="/vsgoi.png" alt="Logo" className="h-14 drop-shadow-xl" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <ul className="inline-flex ml-[3.5em] space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-[28px] drop-shadow-lg text-white font-semibold uppercase hover:text-gray-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavbarBottom;
