import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Input } from "@mui/material";

function ModalBox() {
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
	const [open, setOpen] = useState(false);
	const signUp = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				return authUser.user.updateProfile({
					displayName: username,
				});
			})
			.catch((error) => alert(error.message));
	};
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser);
				setUser(authUser);
				//logged in...

				if (authUser.displayName) {
					//don't update username
				} else {
					//if create new user
					return authUser.updateProfile({
						displayName: username,
					});
				}
			} else {
				setUser(null);
				//logged out...
			}
		});

		return () => {
			unsubscribe();
		};
	}, [user, username]);

	return (
		<Main>
			{user ? (
				<button onClick={() => auth.signOut()}>Logout</button>
			) : (
				<div className='login-con t'>
					<button onClick={() => setOpen(true)}>Sign Up</button>
				</div>
			)}

			<Modal open={open} onClose={() => setOpen(false)}>
				<Form style={style}>
					<form className='app-signup'>
						<center>
							<div className='header'>
								<h3 className='logo'>Ethiogram</h3>
							</div>
						</center>

						<Input
							className='input'
							placeholder='username'
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
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

						<button type='submit' onClick={signUp}>
							SIGN UP
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

export default ModalBox;
