import React from 'react';
import NavBar from './../NavBar';
import './styles.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__body">
                <div id="site-navigation" className="navBar">
                    <NavBar />
                </div>
                <div className="header__content">
                    <h1><a href="/" className="coolLink">CHRIS NGUYEN</a></h1>
                    <p>Welcome to my blog!</p>
                    <div className="socialIcons">
                        <IconButton target="_blank" href="https://www.facebook.com/nero.kix/">
                            <FacebookIcon style={{color: 'white'}}/>
                        </IconButton>
                        <IconButton target="_blank" href="https://www.instagram.com/chrisnguyen413/">
                            <InstagramIcon style={{color: 'white'}} />
                        </IconButton>
                        <IconButton target="_blank" href="https://github.com/ductuannguyen134/">
                            <GitHubIcon style={{color: 'white'}} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
