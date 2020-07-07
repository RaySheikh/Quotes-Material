import { GET_RANDOMQUOTE } from "../actions/constants";

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

interface LoginState {
  username?: string;
  password?: string;
  loggedIn?: boolean;
  errorMessage?: string;
}

interface LoginActions {
  type:
    | typeof UPDATE_USERNAME
    | typeof UPDATE_PASSWORD
    | typeof UPDATE_LOGIN
    | typeof LOGIN_ERROR;
  payload: LoginState;
}

const loginReducer = (
  state: LoginState = {
    username: "",
    password: "",
    loggedIn: false,
    errorMessage: "",
  },

  { type, payload }: LoginActions
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

interface FetchQuotesState {
  data: Array<{}>;
}

interface FetchQuoteAction {
  type: typeof GET_ALLQUOTES;
  payload: FetchQuotesState;
}

const fetchQuotes = (
  state: FetchQuotesState = { data: [] },
  { type, payload }: FetchQuoteAction
) => {
  switch (type) {
    case GET_ALLQUOTES:
      return { ...state, data: payload };
    default:
      return state;
  }
};

interface CreateQuoteState {
  quote?: string;
  author?: string;
  loading?: boolean;
  catagory?: string;
}

interface CreateQuoteActions {
  type:
    | typeof UPDATE_QUOTE
    | typeof UPDATE_AUTHOR
    | typeof UPDATE_CATAGORY
    | typeof SET_LOADING
    | typeof RESET_CREATEQUOTE;
  payload: CreateQuoteState;
}

const createQuote = (
  state: CreateQuoteState = {
    quote: "",
    author: "",
    catagory: "",
    loading: false,
  },
  { type, payload }: CreateQuoteActions
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
interface MessageBoxState {
  message?: string;
  color?: string;
}
interface MessageBoxAction {
  type: typeof UPDATE_MESSAGE;
  payload: MessageBoxState;
}
const messageBox = (
  state: MessageBoxState = { message: "", color: "" },
  { type, payload }: MessageBoxAction
) => {
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

interface SwitchThemeState {
  darkState: boolean;
}
interface SwitchThemeActions {
  type: typeof SWITCH_THEME;
  payload: SwitchThemeState;
}

const switchTheme = (
  state: SwitchThemeState = { darkState: false },
  { type, payload }: SwitchThemeActions
) => {
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

interface RandomQuoteState {
  quote: object;
}

interface RandomQuoteAction {
  type: typeof GET_RANDOMQUOTE;
  payload: RandomQuoteState;
}

const getRandomQuote = (
  state: RandomQuoteState = { quote: {} },
  { type, payload }: RandomQuoteAction
) => {
  switch (type) {
    case GET_RANDOMQUOTE:
      return {
        ...state,
        quote: payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  messageBox,
  loginReducer,
  createQuote,
  fetchQuotes,
  getRandomQuote,
  switchTheme,
});
