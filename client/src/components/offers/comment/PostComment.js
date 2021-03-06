import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";

import { postOfferComment } from "../../../actions/offer";

const PostComment = ({ offerId, postOfferComment, placeDisplayed }) => {
	const [comment, setComment] = useState("");

	const onChange = (e) => {
		setComment(e.target.value);
	};

	const onClick = (e) => {
		const offerId = e.target.id;
		setComment("");
		postOfferComment(comment, offerId, placeDisplayed);
	};

	return (
		<InputGroup>
			<FormControl
				className="offset-1 post-comment-input-overriding-bootstrap"
				placeholder="Leave you comment"
				aria-label="Comment input"
				onChange={onChange}
				value={comment}
			/>
			<Button
				id={offerId}
				onClick={onClick}
				variant="dark"
				className="post-comment-button-overriding-bootstrap"
				disabled={!comment.length > 0}>
				Post
			</Button>
		</InputGroup>
	);
};

PostComment.propTypes = {
	postOfferComment: PropTypes.func,
};

export default connect(null, {
	postOfferComment,
})(PostComment);
