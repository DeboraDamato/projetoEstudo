class CalcController {
    
    constructor(){
        
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }
    
    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "123";
        timeEl.innerHTML = "16:56";
        dateEl.innerHTML = "14/10/2021";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}