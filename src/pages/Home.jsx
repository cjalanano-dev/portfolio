import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <h2 className="text-4xl font-bold">
        Hi, I’m <span className="text-blue-500">Carlos James Alanano</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Aspiring Software Engineer | CS Student
      </p>
      <Link to="/projects" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        View My Work
      </Link>
    </section>
  );
}

export default Home;
