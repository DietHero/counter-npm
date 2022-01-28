import { Counter } from "./Counter.js"
import { Button } from "./button.js"

export const DecreasingCounter = 
class extends Counter{
    constructor(selector) {
        super (selector) ///ale nie trzeba pisać konstruktora bo sam bierze z klasy wyzej 
    }

    dec () {
        this.number = this.number - 1 
        this.render()
    }
    render () {
       // Counter.prototype.render.call(this)

       super.render()

        const button = new Button ('-',  () => this.dec())
        
        button.innerText = '-'
    
       
        this.container.appendChild(button.render())
    }
 }
 
 export default DecreasingCounter
