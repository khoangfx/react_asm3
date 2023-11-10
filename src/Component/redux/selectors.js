//selec vao fill stateDE > display
export const stateDetailSelector = (state) => {
  return state.stateDetail.display;
};

// select vao fill data
export const stateData = (state) => state.data;

//selec vao fill stateShopPage
export const stateShopPage = (state) => state.stateDataShopPage;

//selec func  stateFormatCash

export const stateFormatCash = (state) => state.formatCash;

// select id product cua shoppage
export const stateIDShopPage = (state) => state.stateDetailPage.id;

// select fill dataProduct
export const dataProduct = (state) => state.dataProduct;
