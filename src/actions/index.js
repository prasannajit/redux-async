import client from '../apis/jsonplaceholder';
//import _ from 'lodash';
export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const response = await client.getPosts("/posts");
        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
};

export const fetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await client.getUser(id);
        dispatch({ type: 'FETCH_USER', payload: response });
    }
}

// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch);
//     }
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await client.getUser(id);
//     dispatch({ type: 'FETCH_USER', payload: response })
// });