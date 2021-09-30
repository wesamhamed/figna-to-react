import {Link,useLocation} from "react-router-dom";
import styles from "./Sidebar.module.scss";
import samanthaImg from "../../assets/png/samantha.png";


const Sidebar = () => {
  const location =useLocation();
  const sidebarNavLinks =["dashboard","expenses","wallets","summary","accounts","settings"];

  return (
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="Samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul className={styles.sidebarUl}>
              {sidebarNavLinks.map((sidebarNavLink)=>(
                   <li className={styles.sidebarNavItem}>
                   <Link className={location.pathname === sidebarNavLink?
                                        styles.sidebarNavLinkActive : 
                                        styles.sidebarNavLink} to={`/${sidebarNavLink}`}>{sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}</Link>
                 </li>
              ))}
            </ul>
          </nav>
        </div>
    </aside>
  )
}

export default Sidebar
