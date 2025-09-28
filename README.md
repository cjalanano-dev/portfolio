# Portfolio Website

Welcome to my portfolio website! This project showcases my skills, experience, and selected works.

## Features

- Responsive design
- Project gallery
- About me section
- Contact form

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Tailwind CSS

## Contact Form (Formspree)

This project uses Formspree to send contact form submissions directly to your email.

Setup:
- Create a form on Formspree and copy its form ID (looks like `abcdwxyz`).
- Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID`:
	- VITE_FORMSPREE_ID=your_form_id_here
- Restart the dev server if it’s running so Vite picks up the env variable.

Notes:
- If `VITE_FORMSPREE_ID` is not set, the form will show an error on submit.
- A hidden honeypot field is included to reduce spam.

---
*Created by Carlos James Alanano, 2025*