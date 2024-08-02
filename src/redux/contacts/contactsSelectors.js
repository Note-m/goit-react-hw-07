import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/filtersSlice";

export const selectTasks = (state) => state.contacts.items;

export const loading = (state) => state.contacts.loading;

export const error = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectTasks, selectFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
