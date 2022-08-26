import { Link } from 'react-router-dom'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['r', 'i', 'n', 'i', 'k', 'e', 't', 'h']
  const jobArray = [
    'p',
    'a',
    's',
    's',
    'i',
    'o',
    'n',
    'a',
    't',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={25}
          />
        </h1>
        <h2>
          Data Science & Machine Learning Enthusiast | Open Source Contributor |
          Web Developer | Technical Writer
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
