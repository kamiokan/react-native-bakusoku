const FETCH_ALL_REVIEWS = "fetch_all_reviews";

// Action creator を作成
export const fetchAllReviews = () => {
  // Reducerに渡す`type`と`payload`を指定
  return { type: FETCH_ALL_REVIEWS, payload: allReviewsTmp };
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
    country: "USA",
    dateFrom: "Jan/15/2021",
    dateTo: "Jan/25/2021",
    imageURIs: [
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
    ],
    rank: GOOD,
  },
  {
    country: "USA",
    dateFrom: "Jan/15/2021",
    dateTo: "Jan/25/2021",
    imageURIs: [
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
      require("../assets/add_image_placeholder.png"),
    ],
    rank: POOR,
  },
];
