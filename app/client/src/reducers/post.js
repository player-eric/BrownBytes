/* eslint-disable import/no-anonymous-default-export */
import {
	CHANGE_POST_QUERY_STRING,
	CREATE_POST_FAILED,
	CREATE_POST_SUCCESS,
	DELETE_POST_FAILED,
	DELETE_POST_SUCCESS,
	GET_CREATED_POSTS,
	GET_POSTS,
	CREATE_POST_COMMENT,
	REFRESH_POSTS,
} from "../actions/types";

const initialState = {
	posts: [],
	fetchedPostIds: new Set(["dummy"]),
	loadingPosts: true,
	numPostsFetched: 0,
	queryString: "",
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_POSTS:
			return {
				...state,
				posts: [...state.posts, ...payload],
				fetchedPostIds: new Set([
					...state.fetchedPostIds,
					...payload.map((post) => post.id),
				]),
				loadingPosts: false,
				numPostsFetched: state.numPostsFetched + payload.length,
			};
		case CREATE_POST_SUCCESS:
			const newPostsAfterCreation = payload.filter(
				(post) => !state.fetchedPostIds.has(post.id)
			);
			return {
				...state,
				posts: [...newPostsAfterCreation, ...state.posts],
				fetchedPostIds: new Set([
					...state.fetchedPostIds,
					...newPostsAfterCreation.map((post) => post.id),
				]),
				loadingPosts: false,
				numPostsFetched:
					state.numPostsFetched + newPostsAfterCreation.length,
			};
		case REFRESH_POSTS:
			const newPostsAfterRefreshing = payload.filter(
				(post) => !state.fetchedPostIds.has(post.id)
			);
			return {
				...state,
				posts: [...newPostsAfterRefreshing, ...state.posts],
				fetchedPostIds: new Set([
					...state.fetchedPostIds,
					...newPostsAfterRefreshing.map((post) => post.id),
				]),
				loadingPosts: false,
				numPostsFetched:
					state.numPostsFetched + newPostsAfterRefreshing.length,
			};
		case DELETE_POST_SUCCESS:
			return {
				...state,
				posts: state.posts.filter(
					(post) => post.id !== Number(payload)
				),
				fetchedPostIds: new Set(
					[...state.fetchedPostIds].filter(
						(id) => id !== Number(payload)
					)
				),
				loadingPosts: false,
				numPostsFetched: state.numPostsFetched - 1,
			};
		default:
			return state;
	}
}
