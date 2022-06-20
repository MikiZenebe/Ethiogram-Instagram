import React, { useState } from "react";
import { auth } from "../firebase";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Input } from "@mui/material";

function ModalSignIn() {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [openSignIn, setOpenSignin] = useState(false);
	const [user, setUser] = useState(null);
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error.message));

		setOpenSignin(false);
	};
	return (
		<Main>
			{user ? (
				<button onClick={() => auth.signOut()}>Logout</button>
			) : (
				<button onClick={() => setOpenSignin(true)}>Sign In</button>
			)}
			<Modal open={openSignIn} onClose={() => setOpenSignin(false)}>
				<Form style={style}>
					<form className='app-signup'>
						<center>
							<div className='header'>
								<h3 className='logo'>Ethiogram</h3>
							</div>
						</center>

						<Input
							className='input'
							placeholder='email'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							className='input'
							placeholder='password'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button type='submit' onClick={signIn}>
							SIGN IN
						</button>
					</form>
				</Form>
			</Modal>
		</Main>
	);
}

const Main = styled.div`
	button {
		cursor: pointer;
		border: none;
		margin-right: 10px;
	}
`;
const Form = styled.div`
	.logo {
		object-fit: contain;
		background-color: white;
		font-family: "Lobster", cursive;
		font-weight: lighter;
		margin-bottom: 0.75rem;
	}

	.app-signup {
		display: flex;
		flex-direction: column;
	}

	.input {
		margin: 0 3rem 0 3rem;
	}

	button {
		margin: 1rem 8rem;
		cursor: pointer;
		padding: 0.5rem 0 0.5rem 0;
		border: none;
	}
`;
export default ModalSignIn;
