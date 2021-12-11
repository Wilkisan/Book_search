import React from 'react';
import './Style.css';
const Header = () => {
	return (
		<header className="header__main">
			<div className="header__items">
				<i className="fas fa-book fa-3x header__items-unit"></i>
				<h1 className="header__items-unit">Поиск книг</h1>
			</div>
		</header>
	);
};

export default Header;
