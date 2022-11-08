import "./App.css";
import { Review, Avatar, Landing, Page } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ColorProvider, Context} from "./Context"
import {ColorModeContext} from "react"

function App() {
  return (
    <ColorProvider>
      <Page />
      {/* <BrowserRouter>
    <Routes>
        <Route path="/Avatar" element={<Avatar/>}></Route>
        
    </Routes> */}
      {/* <Avatar />
      <Review /> */}
      {/* <Landing /> */}

      {/* </BrowserRouter> */}
    </ColorProvider>
  );
}

export default App;
