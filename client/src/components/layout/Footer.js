import React, { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Footer = () => {
	const date_now = Date.now();
	return (
		<Fragment>
			<Container>
				<hr></hr>
				<Row>
					<Col sm={9}>
						Copyright © Brown Bytes{" "}
						<Moment format="YYYY">{date_now}</Moment>
					</Col>
					<Col sm={3}>
						Contact the{" "}
						<Link to="/team">
							<i className="fas fa-user-friends"></i> team
						</Link>
						.
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Footer;
