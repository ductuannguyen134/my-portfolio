import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import './styles.css';
import {NavData} from './NavData';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

function NavBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="navBar__main">
            <div className="navBar__button">
                <IconButton onClick={showSidebar}>
                    {sidebar ? <ClearIcon style={{fontSize: 50}} /> : <MenuIcon style={{fontSize: 50}} /> }
                </IconButton>
            </div>
            <nav className={sidebar ? "navBar__list active" : "navBar__list"}>
                {NavData.map((item,index)=>(
                    <>
                        <li key={index} className={item.className}>
                            <Link to={item.path} className="menu-bars">
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    </>
                ))}
            </nav>

        </div>
    )
}

export default NavBar
