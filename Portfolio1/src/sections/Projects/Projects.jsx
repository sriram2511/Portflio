import styles from './ProjectStyles.module.css'
import deepLearning from '../../assets/deeplearning.png'
import ProjectCard from '../../common/ProjectCard'
import machineLearning from '../../assets/machinelearning.png'
import delivery from '../../assets/delivery.png'
import sriram from '../../assets/sriram.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={deepLearning}
          link="https://github.com/sriram2511/deep-learning-based-lung-disease-classification"
          h3="Deep Learning:"
          p="Chest X-ray Image classification"
        />
        <ProjectCard
          src={machineLearning}
          link="https://github.com/sriram2511/Disease_classification-with-feature-reduction"
          h3="Machine Learning:"
          p="Multi-class Classification"
        />
        <ProjectCard
          src={sriram}
          link="https://github.com/sriram2511/Portflio"
          h3="Portfolio Website"
          p="Mutiple portfolio"
        />
        <ProjectCard
          src={delivery}
          link="https://github.com/sriram2511/Delivery-time-prediction-using-Machine-learning"
          h3="Machine Learning"
          p=" Delivery Time prediction"
        />
      </div>
    </section>
  )
}

export default Projects
