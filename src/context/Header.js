import React, { createContext, useState, useEffect, useRef } from 'react';

export const HeaderContext = createContext({
	activeMenu: 'main',
	menuHeight: null,
	dropdownMenuRef: null,
	showDropdownMenu: false,
	showNotificationMenu: false,
	toggleNotificationMenu: () => {},
	toggleDropdownMenu: () => {},
	useOutsideAlerter: () => {},
	calcHeight: () => {},
	handleActiveMenu: () => {}
});

export const HeaderProvider = ({ children }) => {
	const [ activeMenu, setActiveMenu ] = useState('main');
	const [ menuHeight, setMenuHeight ] = useState(null);
	const dropdownMenuRef = useRef(null);
	const [ showDropdownMenu, setShowDropdownMenu ] = useState(false);
	const [ showNotificationMenu, setShowNotificationMenu ] = useState(false);

	const handleActiveMenu = (menu) => {
		setActiveMenu(menu);
	};

	const useOutsideAlerter = (ref) => {
		useEffect(
			() => {
				const handleClickOutside = (e) => {
					if (ref.current && !ref.current.contains(e.target)) {
						setShowDropdownMenu(false);
					}
				};
				document.addEventListener('click', handleClickOutside);
				return () => {
					document.removeEventListener('click', handleClickOutside);
				};
			},
			[ ref ]
		);
	};

	useEffect(
		() => {
			if (dropdownMenuRef.current !== null) {
				setMenuHeight(dropdownMenuRef.current.firstChild.offsetHeight + 30);
			}
		},
		[ dropdownMenuRef ]
	);

	const calcHeight = (el) => {
		const height = el.offsetHeight + 30;
		setMenuHeight(height);
	};

	const toggleDropdownMenu = () => {
		setShowDropdownMenu(!showDropdownMenu);
	};

	const toggleNotificationMenu = () => {
		setShowNotificationMenu(!showNotificationMenu);
	};

	return (
		<HeaderContext.Provider
			value={{
				activeMenu,
				menuHeight,
				dropdownMenuRef,
				showDropdownMenu,
				toggleDropdownMenu,
				useOutsideAlerter,
				calcHeight,
				handleActiveMenu,
				toggleNotificationMenu
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
};
