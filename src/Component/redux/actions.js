// tao mot action
// action show cai popup
export const SHOW_POPUP = (id) => {
  return {
    type: "show-popup",
    payload: {
      display: true,
      id,
    },
  };
};

//action hide cai popup
export const HIDE_POPUP = () => {
  return {
    type: "hide-popup",
    payload: {
      display: false,
    },
  };
};

// action createtor display shopview
export const ACTION_SHOWSHOP = (eventClick) => {
  return {
    type: eventClick,
  };
};

//action click on shoppage.
export const ACTION_SUBMIT_ID = (id) => {
  return {
    type: "action/shoppage",
    payload: {
      id,
    },
  };
};

// action login
export const ON_LOGIN = (data) => {
  return {
    type: "on-login",
    payload: data,
  };
};

//action logout
export const ON_LOGOUT = (data) => {
  return {
    type: "on-logout",
    payload: data,
  };
};

// action ADD_CART
export const ADD_CART = (data) => {
  return {
    type: "add-cart",
    payload: data,
  };
};

//action Remove
export const REMOVE_CART = (data) => {
  return {
    type: "remove-cart",
    payload: data,
  };
};

//action UPDATE
export const UPDATE_CART = (data) => {
  return {
    type: "update-cart",
    payload: data,
  };
};
