import './styles/main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './Components/Nav/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrollToTop from './Components/Utils/ScrollToTop';


function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
