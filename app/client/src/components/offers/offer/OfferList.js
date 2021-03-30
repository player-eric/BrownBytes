import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

import { getOffers } from "../../../actions/offer";
import SingleOffer from "./SingleOffer";

const EventList = ({ getOffers, offers, loading }) => {
	return loading ? (
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	) : (
		<Fragment>
			{offers.map((offer) => (
				<SingleOffer key={offer.id} offer={offer}></SingleOffer>
			))}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	offers: state.offers.offers,
	loading: state.offers.loading,
});

export default connect(mapStateToProps, { getOffers })(EventList);