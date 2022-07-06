import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/FeedbackSucess";
import Registration from "./pages/Registration";

  
const MyRoutes: React.FC = () => {
 return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
    </BrowserRouter>
    );
  };
  
  export default MyRoutes;