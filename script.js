const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".buttons .clean");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector(".equals");
const firstNumberTxt = document.querySelector(".first-number");
const secondNumberTxt = document.querySelector(".second-number");



class Calculator {
    constructor(firstNumberTxt, secondNumberTxt) {
        this.firstNumberTxt = firstNumberTxt
        this.secondNumberTxt = secondNumberTxt
        this.clear()
    }

    clear(){
        this.firstNumber = "";
        this.secondNumber = "";
        this.operation = undefined;
    }

    delete(){
this.firstNumber = this.firstNumber.toString().slice(0, -1)
    }

    appendNumber(number){
        if(number === "." && this.firstNumber.includes(".")) return
        this.firstNumber = this.firstNumber.toString() + number.toString()
    }

    appendOperation(operation){
        if (this.firstNumber === "") return
        if (this.secondNumber === !"") {
            this.compute()
        }
        this.operation = operation;
        this.secondNumber = this.firstNumber;
        this.firstNumber = "";
    }

    compute(){
        let calculation
        const second = parseFloat(this.secondNumber)
        const first = parseFloat(this.firstNumber)
        if (isNaN(first) || isNaN(second)) return
        switch(this.operation) {
            case "+":
                calculation = second + first
            break

            case "-":
                calculation = second - first
            break

            case "*":
                calculation = second * first
            break

            case "/":
                calculation = second / first
            break

            case "%":
                calculation = second % first
            break
            default:
                return
        }

        this.firstNumber = calculation
        this. operation= undefined
        this.secondNumber = ""
    }

    display(){
        this.firstNumberTxt.innerText = this.firstNumber
        this.secondNumberTxt.innerText = this.secondNumber
if (this.operation != undefined) {
    this.secondNumberTxt.innerText = `${this.secondNumber} ${this.operation}`
}

    }

}


const calculator = new Calculator(firstNumberTxt, secondNumberTxt);





numberBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        calculator.appendNumber(btn.innerText)
        calculator.display()
    })
})

operationBtns.forEach(btn =>{
    btn.addEventListener("click", () => {
        calculator.appendOperation(btn.innerText)
        calculator.display()
    })
})


equalsBtn.addEventListener("click", () => {
        calculator.compute()
        calculator.display()
    })

clearBtn.addEventListener("click", () => {
    calculator.clear()
    calculator.display()
})

deleteBtn.addEventListener("click", () => {
    calculator.delete()
    calculator.display()
})


