import "./App.css";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AdminLogin from "./Pages/Admin/AdminLogin";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHome from "./Pages/Admin/AdminHome";
import Surveys from "./Pages/Surveys";
import SurveyBoard2 from "./Components/Survey's/QuestionType/SurveyBoard2";
import SurveyBoardFunction from "./Components/Survey's/QuestionType/SurveyBoardFunction";
import Addadmin from "./Pages/Admin/Addadmin";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  const [adminlog, setAdminLogIn] = useState({});
  const [user, setUserReg] = useState({});
  const [auth, setAuth] = useState();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home setUserReg={setUserReg} />
          </Route>
          <Route exact path="/admin/login">
            <AdminLogin setAdminLogIn={setAdminLogIn} auth={auth} setAuth={setAuth}/>
          </Route>
          {/* <Route
            exact
            path="/adminhome"
            component={() => (
              <AdminHome
                adminlog={adminlog}
                setAdminLogIn={setAdminLogIn}
                auth={true}
              />
            )}
          /> */}
          {/* // </Route> */}

          <ProtectedRoute
            path="/admin/home"
            auth={auth}
            component={() => (
              <AdminHome
                adminlog={adminlog}
                setAdminLogIn={setAdminLogIn}
                setAuth={setAuth}
              />
            )}

            // {AdminHome} auth={true}
          />

          <Route exact path="/user/surveyBoard">
            <SurveyBoardFunction user={user} setUserReg={setUserReg} />
          </Route>
          <Route exact path="/admin/add">
            <Addadmin adminlog={adminlog} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
