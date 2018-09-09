const initialState = {
  showNav: false,
  search: false,
  cart: [],
  allProducts: [],
  user: {}
};

const SHOW_NAV_BAR = "SHOW_NAV_BAR";
const SHOW_SEARCH = "SHOW_SEARCH";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const UPDATE_USER = "UPDATE_USER";

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SHOW_NAV_BAR:
      return Object.assign({}, state, { showNav: !payload.showNav });

    case SHOW_SEARCH:
      return Object.assign({}, state, { search: !payload.search });

    case UPDATE_PRODUCT:
      return Object.assign({}, state, { allProducts: payload });

    case UPDATE_USER:
      return Object.assign({}, state, { user: payload });
    default:
      return state;
  }
}

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export function showNavBar(showNav) {
  return {
    type: SHOW_NAV_BAR,
    payload: {
      showNav: showNav
    }
  };
}

export function showSearch(search) {
  return {
    type: SHOW_SEARCH,
    payload: {
      search: search
    }
  };
}

export function updateProducts(allProducts) {
  return {
    type: UPDATE_PRODUCT,
    payload: allProducts
  };
}
