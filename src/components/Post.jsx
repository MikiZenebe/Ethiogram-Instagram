import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Post({ username, caption, ImageUrl }) {
	return (
		<Main>
			<div className='post_header'>
				<Avatar className='post_avatar' alt='miki' src={ImageUrl} />
				<h3>{username}</h3>
			</div>
			{/* header -> avatar -> username */}

			{/* profile image */}
			<img src={ImageUrl} alt='' className='post_image' />

			{/* username + caption */}
			<h4 className='post_text'>
				<strong>{username}</strong> {caption}
			</h4>
		</Main>
	);
}

const Main = styled.div`
	max-width: 500px;
	background-color: white;
	border: 1px solid lightgray;
	margin-bottom: 45px;
	//Classes
	.post_image {
		width: 100%;
		object-fit: contain;
		border-top: 1px solid lightgray;
		border-bottom: 1px solid lightgray;
	}
	.post_text {
		font-weight: normal;
		padding: 17px;
	}
	.post_header {
		display: flex;
		align-items: center;
		padding: 17px;
	}

	.post_avatar {
		margin-right: 10px;
	}
`;
export default Post;
