import"./teamActionTypes";
import { ADD_CHARACTER, REMOVE_CHARACTER, TeamActionType } from "./teamActionTypes";

export function addCharacter() : TeamActionType {
   return {
      type: ADD_CHARACTER,
      qty: 1
   }
}

export function removeCharacter() : TeamActionType {
   return {
      type: REMOVE_CHARACTER,
      qty: 1
   }
}