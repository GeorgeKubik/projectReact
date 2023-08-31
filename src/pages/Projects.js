
import Project from '../Components/Project/Project';
import { projects } from '../helpers/ProjectsList';

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map(({ id, title, img }) => {
						return (
							<Project
								title={title}
								img={img}
								key={id}
								index={id}
							/>
						)
					})}
				</ul>
			</div>
		</main>
	);
}

export default Projects;