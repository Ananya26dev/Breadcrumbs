import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Home from "./components/Home";
const App = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    const breadcrumbsData = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Service", path: "/service" },
      { label: "Contact", path: "/contact" },
    ];
    setBreadcrumbs(breadcrumbsData);
  }, []);

  return (
    <Router>
      <div className="container">
        <section>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="breadcrumb-item">
                  {index === breadcrumbs.length - 1 ? (
                    <span>{breadcrumb.label}</span>
                  ) : (
                    <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
