import s from './Header.module.css';
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [bar] = useState([
        {name: 'plan', path: '/plan'},
        {name: 'chat', path: '/chat'},
        {name: 'profile', path: '/profile'},
    ])
    const [active, setActive] = useState(null)
    const handleClick = (index) => {
        active !== index ? setActive(index) : setActive(null)
    }
    const navbar = () => {
        return bar.map((el, index) => (
            <NavLink onClick={() => (handleClick(index))} className={index === active ? s.active : ""} key={index} to={el.path}>{el.name}</NavLink>
        ))
    }
    return (
        <header className={s.header}>
            <div>
                <h3><a href="https://www.zsti.gliwice.pl/" target="_blank" rel="noreferrer">ZSTI GLIWICE</a></h3>
                <h3>2024</h3>
            </div>
            <h1><NavLink onClick={() => (handleClick(null))} to='/'>Korepetycje</NavLink></h1>
            <nav>
                {navbar()}
            </nav>
            <span className={`${s.circle} ${s.circle_one}`}></span>
            <span className={`${s.circle} ${s.circle_two}`}></span>
            <span className={`${s.circle} ${s.circle_three}`}></span>
        </header>
    )
}

export default Header;