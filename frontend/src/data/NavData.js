import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export const NavData = [
    {
        title: 'Home',
        path: 'home',
        icon: <HomeIcon />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: 'about',
        icon: <PersonIcon />,
        className: 'nav-text'
    },
    {
        title: 'Skills',
        path: 'skills',
        icon: <BarChartIcon />,
        className: 'nav-text'
    },
    {
        title: 'Experience',
        path: 'experience',
        icon: <BusinessCenterIcon />,
        className: 'nav-text'
    },
    {
        title: 'Education',
        path: 'education',
        icon: <LocalLibraryIcon />,
        className: 'nav-text'
    }

]