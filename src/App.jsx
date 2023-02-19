import './styles/app.css';
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showButtons: true,
    };
  }

  toggleButtons = () => {
    this.setState((state) => ({ showButtons: !state.showButtons }));
  };

  render() {
    const { showButtons } = this.state;

    return (
      <>
        <header>CV Builder</header>

        <button className='toggle' onClick={this.toggleButtons}>
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
}

export default App;
