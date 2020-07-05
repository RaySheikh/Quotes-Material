const {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_LOGIN,
  LOGIN_ERROR,
  UPDATE_AUTHOR,
  UPDATE_CATAGORY,
  UPDATE_QUOTE,
  SET_LOADING,
  UPDATE_MESSAGE,
  RESET_CREATEQUOTE,
  GET_ALLQUOTES,
  SWITCH_THEME,
} = require("../actions/constants");

const { combineReducers } = require("redux");

const loginReducer = (
  state = { username: "", password: "", loggedIn: false, errorMessage: "" },

  { type, payload }
) => {
  switch (type) {
    case UPDATE_USERNAME:
      return { ...state, username: payload };
    case UPDATE_PASSWORD:
      return { ...state, password: payload };
    case UPDATE_LOGIN:
      return { ...state, loggedIn: payload };
    case LOGIN_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

const fetchQuotes = (state = { data: [] }, { type, payload }) => {
  switch (type) {
    case GET_ALLQUOTES:
      return { ...state, data: payload };
    default:
      return state;
  }
};

const createQuote = (
  state = {
    quote: "",
    author: "",
    catagory: "",
    onAdd: "",
    loading: false,
  },
  { type, payload }
) => {
  switch (type) {
    case UPDATE_QUOTE:
      return {
        ...state,
        quote: payload,
      };
    case UPDATE_AUTHOR:
      return {
        ...state,
        author: payload,
      };
    case UPDATE_CATAGORY:
      return {
        ...state,
        catagory: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case RESET_CREATEQUOTE:
      return {
        quote: "",
        author: "",
        catagory: "",
        onAdd: "",
        loading: false,
      };
    default:
      return state;
  }
};
const messageBox = (state = { message: "", color: "" }, { type, payload }) => {
  switch (type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: payload.message,
        color: payload.color,
      };
    default:
      return state;
  }
};

const switchTheme = (state = { darkState: false }, { type, payload }) => {
  switch (type) {
    case SWITCH_THEME:
      return {
        ...state,
        darkState: payload,
      };
    default:
      return state;
  }
};

const getRandomQuote = (state = { data: {} }, { type, payload }) => {
  return state;
};

export const rootReducer = combineReducers({
  messageBox,
  loginReducer,
  createQuote,
  fetchQuotes,
  getRandomQuote,
  switchTheme,
});
