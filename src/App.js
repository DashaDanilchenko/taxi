import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"
import Layout from "./components/formsUser/Layout";
import OrderTrip from "./components/formsUser/OrderTrip";
import NotFound from "./components/formsUser/NotFound";
import Report from "./components/formsUser/Report";
import Profile from "./components/formsUser/Profile";
import Settings from "./components/formsUser/Settings";
import History from "./components/formsUser/History";
import { sha512, utf8_to_b64 } from "./helpers";
import FormEntrance from "./components/entrance/FormEntrance";
import FormRegistration from "./components/entrance/FormRegistration";

// async function dataPassword (a) {
 
//   return await a
// }



function App() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [passwordHash512, setPasswordHash512] = useState ('')
  const [isAuthorization, setIsAuthorization] = useState('')

  

  sha512(password).then(result => setPasswordHash512(result))

  useEffect (() => {
    setIsAuthorization(utf8_to_b64(`${login}:${passwordHash512}`))
  }, [login, passwordHash512])



  // console.log(login)
  // console.log(password)
  // console.log(isAuthorization)

  function postDataUser() {
    fetch('http://31.43.107.151:7317/api/account', { 
          headers: {
            'Accept': 'application/json',

            'Content-Type': 'application/json ; charset=utf-8',
            
            'Content-Length':'X-WO-API-APP-ID: your_app_id',
          },
          method: "POST", 
          body: JSON.stringify({
            "Login": `${login}`,

            "Password":`${isAuthorization}`,
        
            "WebOrdersApiClientAppToken":"App_Token",
          }),
        });
    }



  // useEffect(() => {
  //   fetch('http://31.43.107.151:7317//api/clients/')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, []);



  return (
    <HashRouter>
     <Routes>
      <Route path={`/${login}?`} element={<Layout login={login}/>}>
        <Route index element={<OrderTrip 
        login={login}
        />}/>
        <Route path={`/${login}/history`} element={<History/>}/>
        <Route path={`/${login}/report`} element={<Report/>}/>
        <Route path={`/${login}/profile`} element={<Profile/>}/>
        <Route path={`/${login}/settings`} element={<Settings/>}/>
        <Route path={`/${login}/entrance`} element={<FormEntrance 
        setLogin={setLogin} 
        setPassword={setPassword}
        postDataUser={postDataUser}
        />}/>
        <Route path={`/${login}/registration`} element={<FormRegistration/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
