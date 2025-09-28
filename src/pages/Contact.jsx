import { Link } from "react-router-dom";
import React from "react";

const Contact = () => {
    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight-lg tracking-tighter-xl" style={{ color: "var(--text)" }}>Contact Me</h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                        This Page is coming soon. In the meantime, feel free to reach out via email at 
                        <a className="underline" href="mailto:cjalanano.dev@gmail.com">
                             cjalanano.dev@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
