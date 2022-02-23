import axios from "axios";

export const LOAD_PHOTO_STARTED = "LOAD_PHOTO_STARTED";
export const LOAD_PHOTO_SUCCESS = "LOAD_PHOTO_SUCCESS";
export const LOAD_PHOTO_ERROR = "LOAD_PHOTO_ERROR";
// APRROVE
export const APPROVE_PHOTO_SUCCESS = "APPROVE_PHOTO_SUCCESS";

export const loadPhotosAction = () => (dispatch) => {
  dispatch({ type: LOAD_PHOTO_STARTED });
  axios
    .get(
      `https://api.unsplash.com/photos/random?client_id=jzuDzdXjyBFvPz8se3DPP7dkShqJam7P4W4p-BFis90`
    )
    .then((res) => {
      dispatch({
        type: LOAD_PHOTO_SUCCESS,
        payload: res?.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_PHOTO_ERROR,
        payload: error.response.data ?? "Something went wrong",
      });
    });
};
export const approvePhotoAction = (photo) => (dispatch) => {
  dispatch({
    type: APPROVE_PHOTO_SUCCESS,
    payload: photo.url,
  });
};
