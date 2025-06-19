import React from 'react';

import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import BackToTopButton from './components/BackToTopButton';
// import { ThemeProvider } from './components/ThemeContext';
// import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <div className='w-full overflow-hidden'>
  
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <BackToTopButton />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './index.css'; // Assure-toi que Tailwind est bien importé
// import Navbar from './components/Home/Navbar';
// import Hero from './components/Home/Hero'
// import About from './components/pages/About';
// import Projects from './components/pages/Projects';
// import Services from './components/pages/Services';
// import Contact from './components/pages/Contact';
// import Footer from './components/pages/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "bg-darkBg text-darkText min-h-screen" : "bg-lightBg text-lightText min-h-screen"}>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className=" m-4 px-4 py-2 rounded bg-[#C77DFF] text-white "
//       >
//         {darkMode ? "Mode Clair" : "Mode Sombre"}
//       </button>

//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
