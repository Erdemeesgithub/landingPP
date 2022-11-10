import "./App.css";
import {
  // Review, Avatar, Landing,
  Page,
  Footer,
  Nav,
  Landing,
  Review,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./Context";
import { ColorModeContext } from "react";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="Page" element={<Page />} />
          <Route path="Review" element={<Review />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
