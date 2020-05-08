import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaPlus, FaCaretDown, FaChevronRight, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../../../../firebase/firebase.utils';
import { CSSTransition } from 'react-transition-group';
import { Link, useRouteMatch } from 'react-router-dom';

import './navbar.styles.scss';

export const Header = () => {
	const match = useRouteMatch();

	return (
		<header className="dashboard-header">
			<div className="logo-container">
				<Link to="/dashboard" className="logo">
					CheckVid.io
				</Link>
			</div>
			<Navbar>
				<NavItem to={`${match.url}/create-project`} icon={<FaPlus />} />
				<DropdownNavItem icon={<FaBell />} />
				<DropdownNavItem icon={<FaCaretDown />}>
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
	const [ open, setOpen ] = useState(false);

	return (
		<li className="nav-item">
			<span className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</span>

			{open && props.children}
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
	const [ activeMenu, setActiveMenu ] = useState('main');
	const [ menuHeight, setMenuHeight ] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current.firstChild.offsetHeight + 30);
	}, []);

	const calcHeight = (el) => {
		const height = el.offsetHeight + 30;
		setMenuHeight(height);
	};

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
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				classNames="menu-primary"
				onEnter={calcHeight}
			>
				<div className="menu">
					<DropdownItem to="profile" leftIcon={<FaPlus />}>
						My Profile
					</DropdownItem>
					<DropdownItem
						leftIcon={<FaPlus />}
						rightIcon={<FaChevronRight />}
						handleClick={() => setActiveMenu('settings')}
					>
						Settings
					</DropdownItem>
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
					<DropdownItem leftIcon={<FaArrowLeft />} handleClick={() => setActiveMenu('main')} />
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
