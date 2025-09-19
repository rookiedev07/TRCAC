import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home_Page";
import Admissions from "./Components/Admissions/Admissions";
import Navbar from "./Components/Home/Navbar";

const App = () => {
  return (
    <Router>
      {/* Navbar should be outside Routes so it shows on every page */}
      <Navbar />

      <div>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />

          {/* Admissions Route */}
          <Route path="/admissions" element={<Admissions />} />

          {/* (Optional) 404 Page */}
          <Route path="*" element={<h1 className="text-center mt-20">Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
