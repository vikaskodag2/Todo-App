import { ADD_LIST, DELETE_LIST, ADD_ITEM, DELETE_ITEM } from "./types";
import { v4 as uuid } from "uuid";

export const addItem = (newItem, newItemDesc, listId) => ({
  type: ADD_ITEM,
  payload: {
    newItemId: uuid(),
    newItem,
    newItemDesc,
    listId,
  },
});

export const deleteItem = (listId, itemId) => ({
  type: DELETE_ITEM,
  payload: {
    listId,
    itemId,
  },
});

export const addList = (title) => ({
  type: ADD_LIST,
  payload: {
    listId: uuid(),
    listTitle: title,
  },
});
