import moment from "moment";
import axios from "axios";
import { setAlert, clearAlerts } from "./alert";
import { RED_ALERT, GREEN_ALERT } from "../components/layout/AlertTypes";
import toTop from "../utils/scrollToTop";

export const createEvent = (info) => async (dispatch) => {
	let date = info.date;
	let startTime = info.startTime;
	let endTime = info.endTime;

	clearAlerts();

	// input time from MacOS Safari will be like "06:22 AM", "AM" or "PM" cannot be parsed by moment.js
	// So first remove "AM" or "PM" to ensure moment.js works
	if (startTime.includes("AM") || startTime.includes("PM")) {
		startTime = startTime.slice(0, 5);
	}

	if (endTime.includes("AM") || endTime.includes("PM")) {
		endTime = endTime.slice(0, 5);
	}

	if (!moment(date).isValid()) {
		dispatch(setAlert("Invalid event date", RED_ALERT));
		toTop();
		return;
	}

	const startDateTime = date + " " + startTime;
	const endDateTime = date + " " + endTime;
	if (!moment(startDateTime).isValid()) {
		dispatch(setAlert("Invalid event start time", RED_ALERT));
		toTop();
		return;
	}

	if (!moment(endDateTime).isValid()) {
		dispatch(setAlert("Invalid event end time", RED_ALERT));
		toTop();
		return;
	}

	if (moment(startDateTime).isSameOrBefore(Date.now())) {
		dispatch(
			setAlert("Please enter future start date and time", RED_ALERT)
		);
		toTop();
		return;
	}

	if (moment(endDateTime).isSameOrBefore(startDateTime)) {
		dispatch(
			setAlert("End time should be later than start time", RED_ALERT)
		);
		toTop();
		return;
	}

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const title = info.title;
	const location = info.location;
	date = info.date;
	startTime = startDateTime;
	endTime = endDateTime;
	const hostGroup = info.hostGroup;
	const eventType = info.eventType;
	const admittance = info.whoCanCome;
	const foodType = info.foodType;
	const foodAmount = info.foodAmount;
	const otherInfo = info.otherInfo;

	const body = JSON.stringify({
		title,
		location,
		date,
		startTime,
		endTime,
		hostGroup,
		eventType,
		admittance,
		foodType,
		foodAmount,
		otherInfo,
	});
	console.log("sending body:", body);

	try {
		const res = await axios.post("events", body, config);

		dispatch(
			setAlert(
				"Successfully created an event. Check it out in calendar",
				GREEN_ALERT
			)
		);
		toTop();
	} catch (err) {
		const errorMessage = err.response.data.error;
		dispatch(setAlert(errorMessage, RED_ALERT));
		// dispatch({
		// 	type: CREATE_OFFER_FAILED,
		// });
	}
};

export const getFutureEvents = () => {
	return;
};

export const getPastEvents = () => {
	return;
};

export const watch = () => {
	return;
};
export const unwatch = () => {
	return;
};
export const deleteEvent = () => {
	return;
};
export const postComment = () => {
	return;
};
