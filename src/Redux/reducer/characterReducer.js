import {
  OBTENER_CHARACTER,
  ELIMINAR_UN_CHARACTER,
} from "../action-types/action-types.js"; //Después de haberlo configurado => Ver Ejemplo abajo

const initialState = {
  allCharacters: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };
    case ELIMINAR_UN_CHARACTER:
      const allCharacters = [...state.allCharacters];
      const newAllCharacters = allCharacters.filter((e) => {
        return e.id !== parseInt(action.payload);
      });
      return {
        ...state,
        allCharacters: newAllCharacters,
      };
    default:
      return state;
  }
};

export default characterReducer;
