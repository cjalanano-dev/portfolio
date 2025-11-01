import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationDot, FaFileArrowDown, FaInstagram, FaFacebook } from "react-icons/fa6";

const mono = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
};

const Contact = () => {
    const email = "cjalanano.dev@gmail.com";
    const github = "https://github.com/cjalanano-dev";
    const linkedin = "https://linkedin.com/in/cjalanano-dev";
    const instagram = "https://instagram.com/mrztdsh";
    const facebook = "https://facebook.com/mrztdsh.dev"; 
    const resumeHref = "/";

    // Formspree configuration
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

    // UI status
    const [status, setStatus] = useState("idle"); // idle/sending/success/error
    const [errorMsg, setErrorMsg] = useState("");

    // Form validation state
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [touched, setTouched] = useState({ name: false, email: false, message: false });
    const [fieldErrors, setFieldErrors] = useState({ name: "", email: "", message: "" });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const emailRegex = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-]+))*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

    const validate = (nextValues) => {
        const v = nextValues ?? values;
        const errs = { name: "", email: "", message: "" };
        if (!v.name.trim()) errs.name = "Name is required";
        if (!v.email.trim()) errs.email = "Email is required";
        else if (!emailRegex.test(v.email.trim())) errs.email = "Enter a valid email";
        if (!v.message.trim()) errs.message = "Message is required";
        else if (v.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
        return errs;
    };

    const hasErrors = (errs) => Object.values(errs).some(Boolean);

    const handleBlur = (e) => {
        const { name } = e.currentTarget;
        setTouched((t) => ({ ...t, [name]: true }));
        const errs = validate();
        setFieldErrors(errs);
    };

    const handleInput = (e) => {
        const { name, value } = e.currentTarget;
        const next = { ...values, [name]: value };
        setValues(next);
        if (touched[name]) {
            setFieldErrors(validate(next));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget; 
        const fd = new FormData(form);

        if ((fd.get('company') || '').toString().trim() !== '') {
            return;
        }

        const name = (fd.get('name') || '').toString();
        const from = (fd.get('email') || '').toString();
        const message = (fd.get('message') || '').toString();

        // Validate client-side
        const current = { name, email: from, message };
        const errs = validate(current);
        setFieldErrors(errs);
        setTouched({ name: true, email: true, message: true });
        if (hasErrors(errs)) {
            // focus first invalid
            if (errs.name && nameRef.current) nameRef.current.focus();
            else if (errs.email && emailRef.current) emailRef.current.focus();
            else if (errs.message && messageRef.current) messageRef.current.focus();
            return;
        }

        if (!endpoint) {
            setStatus('error');
            setErrorMsg('Form not configured. Please set VITE_FORMSPREE_ID in your .env file.');
            return;
        }

        setStatus('sending');
        setErrorMsg('');
        try {
            const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name,
                email: from,
                message,
                subject: `Portfolio inquiry from ${name || 'someone'}`,
                reply_to: from,
            }),
            });

            if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            throw new Error(data?.error || `Failed to send message (${res.status})`);
            }

            setStatus('success');
            form.reset();
            setValues({ name: "", email: "", message: "" });
            setTouched({ name: false, email: false, message: false });
            setFieldErrors({ name: "", email: "", message: "" });
            setTimeout(() => {
                window.location.href = "/";;
            }, 2000);
        } catch (err) {
            setStatus('error');
            setErrorMsg(err?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-14 sm:py-16 md:py-20">
            <div className="container-page">
                <div
                    className="mx-auto max-w-2xl rounded-xl border card-elevate overflow-hidden"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                    {/* Header bar with window controls */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(239,68,68,0.9)' }} />
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(234,179,8,0.9)' }} />
                        <span className="inline-block w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.9)' }} />
                        <div className="ml-2 text-xs" style={{ color: 'var(--muted)', ...mono }}>
                            ~/contact — shell
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">

                        {/* Social links */}
                        <div className="mt-5" style={mono}>
                            <div className="text-xs sm:text-sm mb-2" style={{ color: 'var(--muted)' }}>
                                $ contact --social-links
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaGithub /> <span style={{ ...mono }}>GitHub</span>
                                </a>
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaLinkedin /> <span style={{ ...mono }}>LinkedIn</span>
                                </a>
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaInstagram /> <span style={{ ...mono }}>Instagram</span>
                                </a>
                                <a
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2"
                                    style={{ background: 'rgba(15,23,42,0.55)', borderColor: 'var(--border)', color: 'var(--text)' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                                >
                                    <FaFacebook /> <span style={{ ...mono }}>Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact form */}
                        <form onSubmit={onSubmit} className="mt-6 sm:mt-7" noValidate>
                            <div style={mono} className="text-xs sm:text-sm mb-2" >
                                $ sendMessage
                            </div>
                            <div className="space-y-3 sm:space-y-3.5">
                                {/*antispam*/}
                                <input type="text" name="company" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden="true" />
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>name:</label>
                                    <input
                                        ref={nameRef}
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        className="w-full rounded-md px-3 py-2 border bg-transparent"
                                        style={{ borderColor: fieldErrors.name && touched.name ? 'salmon' : 'var(--border)', color: 'var(--text)' }}
                                        aria-invalid={Boolean(fieldErrors.name) && touched.name}
                                        aria-describedby="name-error"
                                        value={values.name}
                                        onInput={handleInput}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && fieldErrors.name && (
                                        <p id="name-error" className="mt-1 text-xs" style={{ color: 'salmon' }}>{fieldErrors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>email:</label>
                                    <input
                                        ref={emailRef}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="w-full rounded-md px-3 py-2 border bg-transparent"
                                        style={{ borderColor: fieldErrors.email && touched.email ? 'salmon' : 'var(--border)', color: 'var(--text)' }}
                                        aria-invalid={Boolean(fieldErrors.email) && touched.email}
                                        aria-describedby="email-error"
                                        value={values.email}
                                        onInput={handleInput}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && fieldErrors.email && (
                                        <p id="email-error" className="mt-1 text-xs" style={{ color: 'salmon' }}>{fieldErrors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>message:</label>
                                    <textarea
                                        ref={messageRef}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full rounded-md px-3 py-2 border bg-transparent resize-y"
                                        style={{ borderColor: fieldErrors.message && touched.message ? 'salmon' : 'var(--border)', color: 'var(--text)' }}
                                        aria-invalid={Boolean(fieldErrors.message) && touched.message}
                                        aria-describedby="message-error"
                                        value={values.message}
                                        onInput={handleInput}
                                        onBlur={handleBlur}
                                    />
                                    {touched.message && fieldErrors.message && (
                                        <p id="message-error" className="mt-1 text-xs" style={{ color: 'salmon' }}>{fieldErrors.message}</p>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 w-full px-4 py-2 rounded-md font-medium disabled:opacity-60"
                                style={{ background: 'var(--accent)', color: '#001015' }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'sending…' : status === 'success' ? 'sent ✓' : 'sendMessage()'}
                            </button>

                            {status === 'error' && (
                                <div className="mt-3 text-sm" style={{ color: 'salmon' }}>{errorMsg}</div>
                            )}
                            {status === 'success' && (
                                <div className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>Thanks! Your message was sent.</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
