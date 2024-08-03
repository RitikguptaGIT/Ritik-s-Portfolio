import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://git-profile-searching.netlify.app"
          h3="GitHub"
          p="Profile search"
        />
        <ProjectCard
          src={freshBurger}
          link="https://pinterest-by-ritik.netlify.app"
          h3="Pinterest"
          p="Image library"
          
        />
        <ProjectCard
          src={hipsster}
          link="https://slack-clone-by-ritik.netlify.app"
          h3="slack"
          p="Productivity Platform"
        />
        <ProjectCard
          src={fitLift}
          link="https://rubics-cube-by-ritik.netlify.app"
          h3="Rubics Cube"
          p="Fun WebApp"
        />
      </div>
    </section>
  );
}

export default Projects;
