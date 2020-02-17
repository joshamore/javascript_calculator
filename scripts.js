/*
    Holds data for the calculator.
*/
let model = {
    updatedLastAction: false,
    currentNum: null,
    toEvaluate: null,
    equalsNum: null,
};

/*
    Performs calculations and updates model data where applicable. Also calls display methods.
*/
const controller = {
    addNum: function(num) {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
            this.clear();
        }
        
        if (model.currentNum === null) {
            model.currentNum = num;
            display.updateNum();
        } else {
            model.currentNum = model.currentNum + num;
            display.updateNum();
        }
    },
    addDot: function() {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
            this.clear();
        }
        
        if (model.currentNum === null) {
            model.currentNum = ".";
            display.updateNum();
        } else if (!model.currentNum.includes(".")) {
            model.currentNum = model.currentNum + ".";
            display.updateNum();
        }
    },
    equals: function() {
        if (model.currentNum === null || model.toEvaluate === null) {
            console.log("Please input a number, a math function, and a second number before pressing equals.");
            return;
        }
        
        model.toEvaluate = model.toEvaluate + model.currentNum;
        model.equalsNum = eval(model.toEvaluate);
        model.currentNum = model.equalsNum;
        
        model.toEvaluate = null;
        model.equalsNum = null;
        
        model.updatedLastAction = true;
        
        display.updateNum();
    },
    clear: function() {
        model.currentNum = null;
        model.toEvaluate = null;
        model.equalsNum = null;
        display.updateNum();
    },
    addition: function() {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
        }
        
        if (model.currentNum === null) {
            console.log("currentNum cannot be null");
            return;
        } else if (model.toEvaluate === null) {
            model.toEvaluate = model.currentNum + " + ";
            model.currentNum = null;
            display.updateNum();
        } else {
            model.toEvaluate = model.toEvaluate + model.currentNum + " + ";
            model.currentNum = null;
            display.updateNum();
        }
    },
    minus: function() {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
        }
        
        if (model.currentNum === null) {
            console.log("currentNum cannot be null");
            return;
        } else if (model.toEvaluate === null) {
            model.toEvaluate = model.currentNum + " - ";
            model.currentNum = null;
            display.updateNum();
        } else {
            model.toEvaluate = model.toEvaluate + model.currentNum + " - ";
            model.currentNum = null;
            display.updateNum();
        }
    },
    multiply: function() {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
        }
        
        if (model.currentNum === null) {
            console.log("currentNum cannot be null");
            return;
        } else if (model.toEvaluate === null) {
            model.toEvaluate = model.currentNum + " * ";
            model.currentNum = null;
            display.updateNum();
        } else {
            model.toEvaluate = model.toEvaluate + model.currentNum + " * ";
            model.currentNum = null;
            display.updateNum();
        }
    },
    divide: function() {
        if (model.updatedLastAction === true) {
            model.updatedLastAction = false;
        }
        
        if (model.currentNum === null) {
            console.log("currentNum cannot be null");
            return;
        } else if (model.toEvaluate === null) {
            model.toEvaluate = model.currentNum + " / ";
            model.currentNum = null;
            display.updateNum();
        } else {
            model.toEvaluate = model.toEvaluate + model.currentNum + " / ";
            model.currentNum = null;
            display.updateNum();
        }
    }
};

/*
    These methods make changes to the DOM.
*/
const display = {
    updateNum: function() {
        if (model.currentNum === null) {
            elements.numberDisplay.innerHTML = ("-");
        } else {
            elements.numberDisplay.innerHTML = model.currentNum;
        }
        
        if (model.toEvaluate === null) {
            elements.toEvalDisplay.innerHTML = ("-");
        } else {
            elements.toEvalDisplay.innerHTML = model.toEvaluate;
        }
    }
};

/*
    Pulling in DOM IDs.
*/
const elements = {
    numberDisplay: document.getElementById("numberDisplay"),
    toEvalDisplay: document.getElementById("toEvalDisplay"),
    num1: document.getElementById("num1"),
    num2: document.getElementById("num2"),
    num3: document.getElementById("num3"),
    num4: document.getElementById("num4"),
    num5: document.getElementById("num5"),
    num6: document.getElementById("num6"),
    num7: document.getElementById("num7"),
    num8: document.getElementById("num8"),
    num9: document.getElementById("num9"),
    num0: document.getElementById("num0"),
    clear: document.getElementById("clear"),
    dot: document.getElementById("dot"),
    addtion: document.getElementById("addition"),
    minus: document.getElementById("minus"),
    multiply: document.getElementById("multiply"),
    divide: document.getElementById("divide"),
    equals: document.getElementById("equals")
};

/*
    Triggers based on user interaction.
*/
const events = {
    clicked1: elements.num1.addEventListener("click", function() {
        controller.addNum("1")
    }),
    clicked2: elements.num2.addEventListener("click", function() {
        controller.addNum("2")
    }),
    clicked3: elements.num3.addEventListener("click", function() {
        controller.addNum("3")
    }),
    clicked4: elements.num4.addEventListener("click", function() {
        controller.addNum("4")
    }),
    clicked5: elements.num5.addEventListener("click", function() {
        controller.addNum("5")
    }),
    clicked6: elements.num6.addEventListener("click", function() {
        controller.addNum("6")
    }),
    clicked7: elements.num7.addEventListener("click", function() {
        controller.addNum("7")
    }),
    clicked8: elements.num8.addEventListener("click", function() {
        controller.addNum("8")
    }),
    clicked9: elements.num9.addEventListener("click", function() {
        controller.addNum("9")
    }),
    clicked0: elements.num0.addEventListener("click", function() {
        controller.addNum("0")
    }),
    clickedClear: elements.clear.addEventListener("click", function() {
        controller.clear();
    }),
    clickedDot: elements.dot.addEventListener("click", function() {
        controller.addDot();
    }),
    clickedEquals: elements.equals.addEventListener("click", function() {
        controller.equals();
    }),
    clickedAddition: elements.addtion.addEventListener("click", function() {
        controller.addition();
    }),
    clickedAddition: elements.minus.addEventListener("click", function() {
        controller.minus();
    }),
    clickedAddition: elements.multiply.addEventListener("click", function() {
        controller.multiply();
    }),
    clickedAddition: elements.divide.addEventListener("click", function() {
        controller.divide();
    })
};