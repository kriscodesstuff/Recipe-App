import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import RecipePage from "./RecipePage";
import base from "./base.scss";
import { UserAuth } from "./Context";

const App = () => {
  return (
    <Router>
      <UserAuth>
        <Routes>
          //figure out how to use exact path for /
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<RecipePage />}></Route>
        </Routes>
      </UserAuth>
    </Router>
  );
};

export default App;
