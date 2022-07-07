import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import RegistrationFail from "./pages/RegistrationFail";
import RegistrationSucess from "./pages/RegistrationSucess";

  
const MyRoutes: React.FC = () => {
 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registrationfail" element={<RegistrationFail />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Registrationsucess" element={<RegistrationSucess />} />
        </Routes>
    </BrowserRouter>
    );
  };
  
  export default MyRoutes;