import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Screens/LandingPage.jsx";
import SignupPage from "./Screens/SignupPage.jsx";
import SigninPage from "./Screens/Signinpage.jsx";
import VsgoiLMS from "./Screens/Vsgoi-LMS.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/VsgoiLMS" element={<VsgoiLMS/>} />
              <Route exact path="/Signup" element={<SignupPage/>} />
              <Route exact path="/Signin" element={<SigninPage/>} />
          </Routes>
      </Router>
  )
}

export default App
