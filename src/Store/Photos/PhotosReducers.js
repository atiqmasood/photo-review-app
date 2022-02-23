import {
  LOAD_PHOTO_STARTED,
  LOAD_PHOTO_SUCCESS,
  LOAD_PHOTO_ERROR,
  APPROVE_PHOTO_SUCCESS,
} from "./PhotosActions";

const photos = JSON.parse(localStorage.getItem("approvedPhotos")) ?? [];
const initState = {
  photo: null,
  approvedPhotos: photos,
  isLoading: false,
};

export default function photosReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PHOTO_STARTED:
      return { ...state, isLoading: true, photo: [] };
    case LOAD_PHOTO_SUCCESS:
      return { ...state, isLoading: false, photo: payload };
    case LOAD_PHOTO_ERROR:
      return { ...state, isLoading: false, photo: [] };
    //Approve
    case APPROVE_PHOTO_SUCCESS:
      photos.push(payload);
      localStorage.setItem("approvedPhotos", JSON.stringify(photos));
      return { ...state, approvedPhotos: photos };
    default:
      return state;
  }
}
