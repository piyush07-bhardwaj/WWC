import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Sites from "./pages/Sites";
import TreeRecords from "./pages/TreeRecords";

// Fallback for undefined routes
const NotFound = () => <div>404 - Page Not Found</div>;

// Centralized route configuration
const routes = [
  { path: "/", element: <Dashboard />, exact: true },
  { path: "/projects", element: <Projects /> },
  { path: "/sites", element: <Sites /> },
  { path: "/tree-records", element: <TreeRecords /> },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Dynamically render routes */}
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
