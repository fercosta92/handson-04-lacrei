import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";

  
const MyRoutes: React.FC = () => {
 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    );
  };
  
  export default MyRoutes;