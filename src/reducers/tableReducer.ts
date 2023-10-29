import { Line } from "../types/tableType";

type SelectItem = {
    type: "SELECT",
    payload: {
        col: number,
        line: number,
        player: "PLAYER-1" | "PLAYER-2"
    }
}

type ListAction = SelectItem;


export const tableReducer = (state: Line[], action: ListAction) => {
    switch (action.type) {
        case "SELECT":
            return state.map((linha, indexLinha) => {
                if (indexLinha === action.payload.line) {
                  return {
                    line: linha.line.map((item, indexColuna) => {
                      if (indexColuna === action.payload.col) {
                        return action.payload.player; // Atualize o valor com o jogador atual
                      }
                      return item; // Mantenha o valor original
                    }),
                  };
                }
                return linha; // Mantenha a linha original
              });
        default:
            return state
    }
}