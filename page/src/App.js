import "./App.css";
import { Review, Avatar, Landing, Page } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Page />
      {/* <BrowserRouter>
    <Routes>
        <Route path="/Avatar" element={<Avatar/>}></Route>
        
    </Routes> */}
      {/* <Avatar />
      <Review /> */}
      {/* <Landing /> */}

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
