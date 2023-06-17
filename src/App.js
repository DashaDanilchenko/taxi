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



function App() {

  let login = 'achumak'
  let pasword

  let paswordHash512 = sha512("1").then(x => pasword=x);
  
  let paswordHash512Login = utf8_to_b64('achumak:4dff4ea340f0a823f15d3f4f01ab62eae0e5da579ccb851f8db9dfe84c58b2b37b89903a740e1ee172da793a6e79d560e5f7f9bd058a12a280433ed6fa46510a')

  console.log(paswordHash512Login)

  console.log(`${login}:${paswordHash512}`)

  // useEffect(() => {
  //   fetch('http://31.43.107.151:7317/api/tariffs')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, []);

  

  const [isAuthorization, setIsAuthorization] = useState(true)

  return (
    <HashRouter>
      <p>YWNodW1hazo0ZGZmNGVhMzQwZjBhODIzZjE1ZDNmNGYwMWFiNjJlYWUwZTVkYTU3OWNjYjg1MWY4ZGI5ZGZlODRjNThiMmIzN2I4OTkwM2E3NDBlMWVlMTcyZGE3OTNhNmU3OWQ1NjBlNWY3ZjliZDA1OGExMmEyODA0MzNlZDZmYTQ2NTEwYQ==

</p>
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
