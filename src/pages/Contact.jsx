import { Link } from "react-router-dom";
import React from "react";

const Contact = () => {
    return (
        <section className="flex flex-col items-center text-center py-20">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg text-gray-600">Feel free to reach out via email or LinkedIn!</p>
            <div className="mt-6 space-x-4">
                <a href="mailto:cjalanano.dev@gmail.com" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/cjalanano-dev/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Contact;
