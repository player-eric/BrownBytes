import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Fragment>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={6}>
						<Image src="blueno_404.jpg" fluid />
					</Col>
					<Col xs={12} sm={12} md={6}>
						<p id="notfound-heading">404 Page Not Found</p>
						<hr></hr>
						<p className="notfound-bold-text">Can Blueno help?</p>
						<Row>
							<p className="notfound-plain-text">
								Go to home page
							</p>
							<Link to="/">
								<Button variant="primary">Home</Button>
							</Link>
						</Row>
						<Row>
							<p className="notfound-plain-text">
								Go to calendar
							</p>
							<Link to="/calendar">
								<Button variant="primary">Calendar</Button>
							</Link>
						</Row>
						<Row>
							<p className="notfound-plain-text">
								Go to log in page
							</p>
							<Link to="/login">
								<Button variant="primary">Sign In</Button>
							</Link>
						</Row>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};
export default NotFound;
