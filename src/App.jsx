import './styles/app.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function App() {
	return (
		<>
			<header>CV Builder</header>

			<div className='cv'>
				<Header />

				<aside>
					<Avatar />
					<Contact />
				</aside>

				<section className='cv-body'>
					<Profile />
					<Education />
					<Experience />
				</section>
			</div>
		</>
	);
}

export default App;
