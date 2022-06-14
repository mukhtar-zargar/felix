import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto p-4 ">
        <ul className="flex gap-3 text-blue-500">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
