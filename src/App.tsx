import { useReducer, useState } from 'react'
import './global.css'
import { tableReducer } from './reducers/tableReducer'
// import { Player } from './types/tableType'

function App() {

  const [player, setPlayer] = useState<"PLAYER-1" | "PLAYER-2">("PLAYER-1")

  const tabuleiro = [
    {line: ["", "", "", "", "", "", ""]},
    {line: ["", "", "", "", "", "", ""]},
    {line: ["", "", "", "", "", "", ""]},
    {line: ["", "", "", "", "", "", ""]},
    {line: ["", "", "", "", "", "", ""]},
    {line: ["", "", "", "", "", "", ""]},
  ]
  
  const [table, dispatch] = useReducer(tableReducer, tabuleiro)

  const handleClick = (indexLine: number, indexCol: number, item: string) => {

    dispatch({type:'SELECT', payload: {col: indexLine, line: indexCol, player}})
    setPlayer(item => {
      if(item == "PLAYER-1"){
        return "PLAYER-2"
      }else{
        return "PLAYER-1"
      }
    })
    console.log(`Plano selecionado ${indexLine}${indexCol}`)
    console.log(`Tabuleiro ${tabuleiro[indexLine].line[indexCol]}`)
    console.log(`Tabuleiro inteiro ${tabuleiro}`)
    console.log(item)
  }

  return (
    <>
      <div className='app-container'>
        <h1 className='title'>Conect Four</h1>
        <div className="grid--container">
          {table.map((col, indexCol) => (
            col.line.map((item, indexLine)=> (
              <div onClick={()=>{
                if(table[indexCol].line[indexLine] === ""){
                  handleClick(indexLine, indexCol, item)
                }
              }} className={`grid--item ${(table[indexCol].line[indexLine]).toLowerCase()}`}></div>
            ))
          ))}
          
        </div>
        <div className="player--container">
            <div className='player-name'>
              {player == 'PLAYER-1' ? 'Player 1' : 'Player 2'}
            </div>
            <span className='player-time'>
              30`s
            </span>
        </div>
      </div>
    </>
  )
}

export default App
