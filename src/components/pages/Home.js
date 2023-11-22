import styles from './Home.module.css'
import astro from '../../img/astro.png'
import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Embarque nessa viagem pelo <span>DEVERSO</span></h1>
      <p>Universo Developer</p>
      <LinkButton to="/newproject" text="Embarcar" />
      <div customClass='img_container'>
        <img src={astro} alt='astro' width="400" height="350"></img>
      </div>
    </section>
  )
}

export default Home