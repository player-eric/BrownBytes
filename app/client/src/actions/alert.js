//import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, CLEAR_ALERT } from "./types";
import store from "../store";

export const setAlert = (msg, alertType) => (dispatch) => {
	//const id = uuidv4();
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType },
	});
};

export const clearAlerts = () => {
	store.dispatch({
		type: CLEAR_ALERT,
		payload: null,
	});
};
