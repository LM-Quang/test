const initialState = {
   name: "",
   age: 0,
};
export const testReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return { ...state };
   }
};
