import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"
import Layout from "./components/formsUser/Layout";
import OrderTrip from "./components/formsUser/OrderTrip";
import NotFound from "./components/formsUser/NotFound";
import Report from "./components/formsUser/Report";
import Profile from "./components/formsUser/Profile";
import Settings from "./components/formsUser/Settings";
import History from "./components/formsUser/History";

function App() {

  const [isAuthorization, setIsAuthorization] = useState(true)

  return (
    <HashRouter>
     <Routes>
      <Route path='/' element={<Layout isAuthorization={isAuthorization}/>}>
        <Route index element={<OrderTrip isAuthorization={isAuthorization}/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
