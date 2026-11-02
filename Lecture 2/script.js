console.log("JS file works!");

const piName = "Pi";

const piVal = "3.14";

// the "old way", good for quick testing

    console.log("the value of " + piName + " is " + piVal+ "!");
    let html = "<p>the value of " + piName + " is " + piVal+ "!</p>";

    //the better way, using template literals (backticks)
    console.log(`the value of ${piName} is ${piVal}!`);

    html = `<p>the value of ${piName} is ${piVal}!</p>`;