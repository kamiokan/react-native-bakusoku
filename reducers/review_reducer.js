const FETCH_ALL_REVIEWS = "fetch_all_reviews";

const INITIAL_STATE = {
  // 初期データ
  allReviews: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return { ...state, allReviews: action.payload };

    default:
      return state;
  }
};
