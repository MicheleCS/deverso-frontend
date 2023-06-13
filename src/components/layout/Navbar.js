import { Link } from "react-router-dom"
import Container from "./Container"
import logo from "../../img/logo.png"
import styles from "./Navbar.module.css"

function Navbar() {
  return(
    <nav class={styles.navbar}>
      <Container>
       <Link to="/">
       <img src={logo} alt="Deverso" width="180" height="80"/>
       </Link>
      <ul class={styles.list}>
        <li class={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li class={styles.item}>
          <Link to="/projects">Projetos</Link>
        </li>
        <li class={styles.item}>
          <Link to="/contact">Contato</Link>   
        </li>
        <li class={styles.item}>
          <Link to="/company">Empresa</Link>
        </li>
        <li class={styles.item}>
          <Link to="/newproject">Novo Projeto</Link>   
        </li>
      </ul>
      </Container>
   </nav>
  )
}

export default Navbar