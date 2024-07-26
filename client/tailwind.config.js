/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/components/Header.jsx",
    "src/components/Footer.jsx",
    "src/components/Homepage/Homepage.jsx",
    "src/components/Homepage/FirstSection.jsx",
    "src/components/Homepage/SecondSection.jsx",
    "src/components/Homepage/ThirdSection.jsx",
    "src/components/Homepage/Main.jsx",
    "src/components/AboutUs/AboutUs.jsx",
    "src/components/AboutUs/Main.jsx",
    "src/components/AboutUs/FirstSection.jsx",
    "src/components/AboutUs/SecondSection.jsx",
    "src/components/AboutUs/ThirdSection.jsx",
    "src/components/AboutUs/FourthSection.jsx",
    "src/components/AdminDashboard/AdminDashboard.jsx",
    "src/components/AdminDashboard/Aside.jsx",
    "src/components/AdminDashboard/Main.jsx",
    "src/components/Auth/auth.jsx",
    "src/components/Auth/main.jsx",
    "src/components/Auth/login.jsx",
    "src/components/Auth/signup.jsx",
    "src/components/Auth/firstSection.jsx",
    "src/components/Auth/secondSection.jsx",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   purge: ['src/components/Homepage.jsx'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
