import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import './style.css';


const NavBar = () => {

	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to='/' className="logo" preventScrollReset>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink} preventScrollReset>
								Home
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to='projects' className={({ isActive }) => isActive ? activeLink : normalLink} preventScrollReset>
								Projects
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to='contacts' className={({ isActive }) => isActive ? activeLink : normalLink} preventScrollReset>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;