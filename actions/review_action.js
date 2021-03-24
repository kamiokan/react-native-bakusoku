import { FETCH_ALL_REVIEWS, SELECT_DETAIL_REVIEW } from "./types";

// Action creator を作成
export const fetchAllReviews = () => {
  // Reducerに渡す`type`と`payload`を指定
  return { type: FETCH_ALL_REVIEWS, payload: allReviewsTmp };
};

export const selectDetailReview = (selectedReview) => {
  return { type: SELECT_DETAIL_REVIEW, payload: selectedReview };
};

const GREAT = "sentiment-very-satisfied";
const GOOD = "sentiment-satisfied";
const POOR = "sentiment-dissatisfied";

const allReviewsTmp = [
  {
    country: "USA",
    dateFrom: "Jan/15/2021",
    dateTo: "Jan/25/2021",
    imageURIs: [
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
    ],
    rank: GREAT,
  },
  {
    country: "Japan",
    dateFrom: "Jan/06/2021",
    dateTo: "Jan/11/2021",
    imageURIs: [
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
    ],
    rank: GOOD,
  },
  {
    country: "China",
    dateFrom: "Jan/15/2020",
    dateTo: "Jan/25/2020",
    imageURIs: [
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
    ],
    rank: POOR,
  },
];
