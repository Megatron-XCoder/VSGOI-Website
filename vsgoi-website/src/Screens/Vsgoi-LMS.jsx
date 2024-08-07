import LMSCards from "../components/LMS-Cards.jsx";

const data = [{
    icon : "https://img.icons8.com/?size=100&id=UfCns4MsppxW&format=png&color=000000",
    title : "Student Login",
    description : "Login with your UID and Password to access your Student Services and Account. " +
        "VSGOI will keep a record of your progress and keep you appraised of the latest updates.",
    url: "/Signup",
},{
    icon : "https://img.icons8.com/?size=100&id=VVTnjccwbmPK&format=png&color=000000",
    title : "LMS Login",
    description : "Login to your LMS using your UID Employee ID and CUIMS password." +
        "In Case you face any issues, then please reset your CUIMS Password and wait for 20 minutes to proceed.",
    url: "#",
},{
    icon : "https://img.icons8.com/?size=100&id=aOMbf5k97bfk&format=png&color=000000",
    title : "Staff Login",
    description : "Login with your Employee Code and Password to access your account, " +
        "keep track of your progress and other official services.",
    url: "#",
},{
    icon : "https://img.icons8.com/?size=100&id=GKll2Fh6kFQ3&format=png&color=000000",
    title : "Admission Login",
    description : "For Admission staff only use your Employee Code and Password to log in " +
        "for admission related services. ",
    url: "#",
}]

function VsgoiLMS() {
    return (
        <div className={`relative min-h-screen bg-gray-100`}>
            <div className="absolute bottom-0 w-full h-1/2 bg-blue-900"></div>
            <div className={`absolute flex top-[8em] ml-14 gap-x-12`}>
                <LMSCards icon={data[0].icon} title={data[0].title} description={data[0].description} url={data[0].url}></LMSCards>
                <LMSCards icon={data[1].icon} title={data[1].title} description={data[1].description} url={data[1].url}></LMSCards>
                <LMSCards icon={data[2].icon} title={data[2].title} description={data[2].description} url={data[2].url}></LMSCards>
                <LMSCards icon={data[3].icon} title={data[3].title} description={data[3].description} url={data[3].url}></LMSCards>
           </div>
        </div>
    )
}

export default VsgoiLMS;