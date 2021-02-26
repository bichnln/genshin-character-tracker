export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

interface AddCharacterActionType {
   type: typeof ADD_CHARACTER,
   qty: number
}

interface RemoveCharacterActionType {
   type: typeof REMOVE_CHARACTER,
   qty: number
}

export type TeamActionType = AddCharacterActionType | RemoveCharacterActionType;
