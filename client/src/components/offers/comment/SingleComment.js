import moment from "moment";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const SingleComment = ({ comment }) => {
	return (
		<Card
			className="offset-1 comment-card-overriding-bootstrap"
			border="secondary">
			<Card.Body className="py-1 px-1">
				<Row noGutters="true">
					<Col
						xs={2}
						sm={2}
						md={2}
						lg={2}
						className="comment-favicon-container">
						<Image
							className="comment-favicon"
							src={comment.poster.avatar}
							alt="image_logo"
							fluid
							roundedCircle
							thumbnail></Image>
					</Col>
					<Col xs={10} sm={10} md={10} lg={10}>
						<p className="comment-head">
							<span className="comment-user">
								{comment.poster.username}
							</span>{" "}
							posted at{" "}
							<span className="comment-time">
								{moment(comment.createdAt).format(
									"HH:mm, DD/MM/YY"
								)}
							</span>
						</p>
						<p className="comment-content">{comment.content} </p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default SingleComment;
