import { stateData } from "./selectors";

// ham lay data
async function getData() {
  const data = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  ).then((res) => res.json());

  return data;
}
const data = getData(); // la mot promise
//localStorage
const dataProduct = JSON.parse(localStorage.getItem("dataProduct")) || [];

//func
function formatCash(str) {
  const string = String(str);
  return string
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}

// initial value
const iniState = {
  data: data,
  stateDetail: { display: false, id: "" },
  stateDataShopPage: [data],
  formatCash,
  stateDetailPage: {
    id: "62ccd4665eefc71539bb6b4c",
  },
  stateDataLogin: {
    email: "",
    password: "",
  },
  dataProduct: dataProduct,
};

const rootReducer = (state = iniState, action) => {
  console.log(action);
  switch (action.type) {
    case "show-popup":
      return {
        ...state,
        // upadate lai display va id
        stateDetail: {
          ...state.stateDetail,
          display: action.payload.display,
          id: action.payload.id,
        },
      };
    case "hide-popup":
      return {
        ...state,
        stateDetail: {
          ...state.stateDetail,
          display: action.payload.display,
        },
      };
    case "All":
      return {
        ...state,
        stateDataShopPage: [state.data],
      };
    case "Iphone":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "iphone")
          ),
        ],
      };
    case "Ipad":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "ipad")
          ),
        ],
      };
    case "Macbook":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "macbook")
          ),
        ],
      };
    case "Airpod":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "airpod")
          ),
        ],
      };
    case "Watch":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "watch")
          ),
        ],
      };
    case "Watch":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "watch")
          ),
        ],
      };
    case "Other":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "Other")
          ),
        ],
      };
    case "Other":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "Other")
          ),
        ],
      };
    case "Other":
      return {
        ...state,
        stateDataShopPage: [
          state.data.then((data) =>
            data.filter((elm) => elm.category === "Other")
          ),
        ],
      };
    case "action/shoppage":
      return {
        ...state,
        stateDetailPage: {
          ...state.stateDataShopPage,
          id: action.payload.id,
        },
      };
    case "on-login":
      return {
        ...state,
        stateDataLogin: {
          ...state.stateDataLogin,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "on-logout":
      return {
        ...state,
        stateDataLogin: {
          ...state.stateDataLogin,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "add-cart":
      return {
        ...state,
        dataProduct: [...state.dataProduct, action.payload],
      };
    case "remove-cart":
      state.dataProduct.splice(action.payload, 1);
      //update local
      localStorage.setItem("dataProduct", JSON.stringify(state.dataProduct));
      return {
        ...state,
        dataProduct: [...state.dataProduct],
      };
    case "update-cart":
      state.dataProduct[action.payload.id] = {
        ...state.dataProduct[action.payload.id],
        quantyti: action.payload.value,
        total:
          state.dataProduct[action.payload.id].price * action.payload.value,
      };
      //luu tren Strorage
      localStorage.setItem("dataProduct", JSON.stringify(state.dataProduct));
      return {
        ...state,
        dataProduct: [...state.dataProduct],
      };
    default:
      return state;
  }
};

export default rootReducer;
