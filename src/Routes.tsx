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
    // <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} />    */}
          <Route path="/Login" element={<Login />} />
          <Route path="/registrationfail" element={<RegistrationFail />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/registrationsucess" element={<RegistrationSucess />} />
          <Route path="/waitlist" element={<ListaEspera />} />
        </Routes>
    // </BrowserRouter>
    );
  };
  
  export default MyRoutes;
