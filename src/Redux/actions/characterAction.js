import {
  OBTENER_CHARACTER,
  ELIMINAR_UN_CHARACTER,
} from "../action-types/action-types";

export function obtenerCharacter(character) {
  return {
    type: OBTENER_CHARACTER,
    payload: character,
  };
}

export function eliminarUnCharacter(id) {
  return {
    type: ELIMINAR_UN_CHARACTER,
    payload: id,
  };
}
