import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import ListaEspera from "./pages/ListaEspera";
import Registration from "./pages/Registration";
import RegistrationFail from "./pages/RegistrationFail";
import RegistrationSucess from "./pages/RegistrationSucess";

  
const MyRoutes: React.FC = () => {
 return (
    <BrowserRouter>
        <Routes>
          <Route path="/Hands-on-04-Lacrei-/" element={<Home />} />
          {/* <Route path="/Hands-on-04-Lacrei-/profile" element={<Profile />} />    */}
          <Route path="/Hands-on-04-Lacrei-/Login" element={<Login />} />
          <Route path="/Hands-on-04-Lacrei-/registrationfail" element={<RegistrationFail />} />
          <Route path="/Hands-on-04-Lacrei-/registration" element={<Registration />} />
          <Route path="/Hands-on-04-Lacrei-/registrationsucess" element={<RegistrationSucess />} />
          <Route path="/Hands-on-04-Lacrei-/waitlist" element={<ListaEspera />} />
        </Routes>
    </BrowserRouter>
    );
  };
  
  export default MyRoutes;
