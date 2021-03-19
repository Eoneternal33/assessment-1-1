/** 
 * Assessment 1.1 
 * 
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it. 
 * 
 * Best of luck, and ask any of the professors for help if needed!
 * 
 * Time allotment: 1 hour
 * 
**/

/*****************************************/

/** 
 * QUESTION #1 -
 * What is the difference between a method and a function?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String ('a method is a chunk of code that refers to a parent object or class and can change stuff inside that parent object/class, a function is a stand alone chunk of code that doesnt affect anything outside of it')

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

String('there is only an equals sign in the "conditional" of the for loop and should be either a less than"<" or "<="')

/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String(" for conditionals that only have 2 possibilities a ternarie is the best type to use")

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String("to execute specific related commands upon execution and not constant in the browser")

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 * 
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String("C. document.createElement('div')")

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String('Document Object Model')

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
        let statement = "Assessments are fun, right?!";

        if (statement === true) {
            console.log('Yes!');
        } else {
            console.log('No!');
        }
    }

String("i dont know if im over thinking but i believe it wont execute because its not called to outside the function but i believe otherwise it will be 'no!' because the argument is saying that true should be the same as 'assesment...'")


/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

String(' they are all in the "Numbers" type')

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String(' an IIFE essentially closes the "true" global space and localizes the whole scope so that the codes inside cant be overwritten by outside sources')

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

String("should output as 'We are out of food...'")

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */
let container = document.querySelector(".my-grid")
function makeGrid(width, height){
    for (let i = 0; i< height; i++){
        let row = document.createElement('div');
        container.appendChild(row);
        for (let j = 0; j < width; j++){
            let square = document.createElement('div');
            square.classList.add("square");
            row.appendChild(square);
        }
     
    }
}
makeGrid(30, 30);


/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

 String(' A global variable is accessible from anywhere and can be changed, a local variable is only available inside its respective scope/function')

/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 * 
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

String("'get'")