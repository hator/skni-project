import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={s.headerRow}>
            <div className={s.logo}>CompaneX</div>
            <NavLink to={'/home'} className={s.link}>Home</NavLink>
            <NavLink to={'/terms-of-use'} className={s.link}>Terms of use</NavLink>
            <NavLink to={'/about-us'} className={s.link}>About us</NavLink>
            <NavLink className={s.searchButton} to={'/search'}>Search</NavLink>
        </div>
    )
}

export default Header;