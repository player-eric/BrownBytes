import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";

import { clearAlerts } from "../../actions/alert";
import { createPost, getPosts } from "../../actions/post";

import PostList from "./post/PostList";
import SearchBar from "./post/SearchBar";

const Networking = ({
	isAuthenticated,
	createPost,
	getPosts,
	numPostsFetched,
}) => {
	useEffect(() => {
		clearAlerts();
		getPosts(numPostsFetched);
	}, [getPosts, numPostsFetched]);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [content, setContent] = useState("");

	const onChange = (e) => {
		setContent(e.target.value);
	};

	const onPost = () => {
		createPost(content);
		setContent("");
	};

	return (
		<Fragment>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>New Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormControl
						className="mr-1"
						size="lg"
						as="textarea"
						aria-label="New post content input text area"
						onChange={onChange}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							onPost();
							handleClose();
						}}
						disabled={!content.length > 0}>
						Post
					</Button>
				</Modal.Footer>
			</Modal>

			<p className="networking-heading1">Networking</p>
			<p className="networking-text">
				Here you can connect with other foodies inside and outside Brown
				community by making posts.
			</p>
			<p className="networking-heading2">Actions</p>
			{isAuthenticated ? (
				<Button variant="success" onClick={handleShow}>
					New Post
				</Button>
			) : (
				<p className="networking-text">
					You are not logged in. Please log in to create new posts.
				</p>
			)}
			<Button
				className="ml-2"
				variant="success"
				onClick={() => {
					window.location.reload();
				}}>
				Refresh
			</Button>
			<hr></hr>
			<SearchBar></SearchBar>
			<PostList></PostList>
			<button
				id="networking-more-posts-button"
				onClick={() => {
					getPosts(numPostsFetched);
				}}>
				See more posts
			</button>
		</Fragment>
	);
};

Networking.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	numPostsFetched: state.post.numPostsFetched,
});

export default connect(mapStateToProps, { createPost, getPosts })(Networking);
