import styles from './HeroStyles.module.css'
// import heroImg from '../../assets/hero-img.png'
import heroImg from '../../assets/sriram.png'

import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'

import githubLight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'

import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'

import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
  const { theme, toggleTheme } = useTheme()
  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
  const githubIcon = theme === 'light' ? githubLight : githubdark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sriram <br />K
        </h1>
        <h2>M.Sc Graduate</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Twitter Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Twitter Icon" />
          </a>
        </span>
        <p>
          {' '}
          An M.Sc. Data Science graduate with hands-on internship experience,
          strong analytical and problem-solving skills, effective communication,
          teamwork.
        </p>
        <a href={CV} download>
          <button className="hover"> Resume</button>
        </a>
      </div>
    </section>
  )
}
export default Hero
