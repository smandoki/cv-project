import './styles/app.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function App() {
  const [showButtons, setShowButtons] = useState(true);

  const toggleButtons = () => {
    setShowButtons((state) => !state);
  };

  return (
    <>
      <header>CV Builder</header>

      <button className='toggle' onClick={toggleButtons}>
        Toggle Buttons
      </button>

      <div className='cv'>
        <Header showButtons={showButtons} />

        <aside>
          <Avatar />
          <Contact showButtons={showButtons} />
        </aside>

        <section className='cv-body'>
          <Profile showButtons={showButtons} />
          <Education showButtons={showButtons} />
          <Experience showButtons={showButtons} />
        </section>
      </div>
    </>
  );
}

export default App;
