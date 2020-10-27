//napraviti event handlere
import {elements} from "./selectDom"
import Game from "./factories/gameloop"
import {game} from "./index"
// SelectDom.cpuSquares.addEventListener("click", (e) => console.log(e.target.dataset.id))
const bindEvents = () => {
    // let dom = SelectDom()

    elements.aiSquares.forEach(element => {
        element.addEventListener("click", (e) => {
            // console.log(e.target.dataset.id)
            game.playerAttack(+e.target.dataset.id)
        })
    });
    elements.resetBtn.addEventListener("click", (e) => game.reset())
    // elements.startBtn.addEventListener("click", (e) => {
    //     game.gameLoop()
    // })
}
export default bindEvents