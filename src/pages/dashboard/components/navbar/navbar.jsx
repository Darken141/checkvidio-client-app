import React, { useContext } from 'react';
import { HeaderContext } from '../../../../context/Header';
import { FaBell, FaPlus, FaCaretDown, FaUserAlt, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../../../../firebase/firebase.utils';
import { CSSTransition } from 'react-transition-group';
import { Link, useRouteMatch } from 'react-router-dom';

import './navbar.styles.scss';

export const Header = () => {
	const match = useRouteMatch();
	const { showDropdownMenu, showNotificationMenu, toggleNotificationMenu, toggleDropdownMenu } = useContext(
		HeaderContext
	);

	return (
		<header className="dashboard-header">
			<div className="logo-container">
				<Link to="/dashboard" className="logo">
					CheckVid.io
				</Link>
			</div>
			<Navbar>
				<NavItem to={`${match.url}/create-project`} icon={<FaPlus />} />
				<DropdownNavItem open={showNotificationMenu} setOpen={toggleNotificationMenu} icon={<FaBell />} />
				<DropdownNavItem open={showDropdownMenu} setOpen={toggleDropdownMenu} icon={<FaCaretDown />}>
					<DropdownMenu />
				</DropdownNavItem>
			</Navbar>
		</header>
	);
};

export const Navbar = ({ children }) => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{children}</ul>
		</nav>
	);
};

export const NavItem = (props) => {
	return (
		<li className="nav-item">
			<Link to={props.to} className="icon-button">
				{props.icon}
			</Link>
		</li>
	);
};

export const DropdownNavItem = (props) => {
	return (
		<li className="nav-item">
			<span className={props.open ? 'icon-button open-dropdown' : 'icon-button'} onClick={() => props.setOpen()}>
				{props.icon}
			</span>

			{props.open && props.children}
		</li>
	);
};

export const DropdownItem = (props) => {
	const match = useRouteMatch();
	return (
		<Link to={props.to ? `${match.url}/${props.to}` : '#'} className="menu-item" onClick={props.handleClick}>
			<span className="icon-button">{props.leftIcon}</span>
			{props.children}
			<span className="icon-right">{props.rightIcon}</span>
		</Link>
	);
};

const DropdownMenu = () => {
	const { useOutsideAlerter, handleActiveMenu, menuHeight, activeMenu, calcHeight, dropdownMenuRef } = useContext(
		HeaderContext
	);

	useOutsideAlerter(dropdownMenuRef);

	const LogOutButton = (props) => {
		return (
			<a href="/" className="menu-item" onClick={props.handleClick}>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	};

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownMenuRef}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem to="projects" leftIcon={<FaUserAlt />}>
						Projekty
					</DropdownItem>
					<DropdownItem to="profile" leftIcon={<FaUserAlt />}>
						Môj profil
					</DropdownItem>
					{/*<DropdownItem
						leftIcon={<FaPlus />}
						rightIcon={<FaChevronRight />}
						handleClick={() => handleActiveMenu('settings')}
					>
						Nastavenia
					</DropdownItem>*/}
					<LogOutButton leftIcon={<FaSignOutAlt />} handleClick={() => auth.signOut()}>
						Odhlásiť sa
					</LogOutButton>
				</div>
			</CSSTransition>

			<CSSTransition
				onEnter={calcHeight}
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={500}
				classNames="menu-secondary"
			>
				<div className="menu">
					<DropdownItem leftIcon={<FaArrowLeft />} handleClick={() => handleActiveMenu('main')} />
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};
