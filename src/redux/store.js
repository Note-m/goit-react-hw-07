import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./filter/contactsSlice";
import { filtersReducer } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
