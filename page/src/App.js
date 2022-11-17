import "./App.css";
import { Page, Footer, Nav, Landing, Review } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./Context";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <BrowserRouter>
          <div style={{ width: "100vw", overflow: "hidden" }}>
            <Nav />
            <Routes>
              <Route index element={<Landing />} />
              <Route path="Page" element={<Page />} />
              <Route path="Review" element={<Review />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ColorProvider>
    </ThemeProvider>
  );
}

export default App;
