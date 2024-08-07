import NavbarTop from "../components/NavbarTop.jsx";
import NavbarBottom from "../components/NavbarBottom.jsx";
import FooterButtonGroup from "../components/FooterButtonGroup.jsx";

function LandingPage() {
    return (
        <div className="relative h-screen ">
            <div className="relative z-10 top-[3em] ">
                <NavbarTop className="mb-2.5"/>
                <NavbarBottom />
                <h1
                   className="text-white text-7xl font-['raleway'] font-bold mt-[1.5em] ml-[3.5em] leading-tight drop-shadow-md "
                >
                    OUR GOAL IS TO SHAPE UP A <br/>COMPLETE HUMAN BEING <br/>THROUGH VALUE EDUCATION
                </h1>
                <FooterButtonGroup/>
            </div>
            <div className="absolute inset-0 bg-school-image h-full bg-black bg-opacity-50 backdrop-blur-sm bg-cover bg-center filter brightness-50"></div>
        </div>
    );
}

export default LandingPage;

