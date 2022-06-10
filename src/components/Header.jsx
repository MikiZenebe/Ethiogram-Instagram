import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

function Header() {
	return (
		<Main>
			<div className='header'>
				<h3 className='logo'>Ethiogram</h3>
			</div>
		</Main>
	);
}

const Main = styled.div`
	.header {
		background-color: white;
		border-bottom: 1px solid lightgray;
		padding: 17px;

		.logo {
			object-fit: contain;
			background-color: white;
			font-family: "Lobster", cursive;
			font-weight: lighter;
		}
	}
`;
export default Header;
