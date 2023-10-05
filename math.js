let prompt = document.querySelector(".prompt");
let inputA = document.querySelector(".input-a");
let inputB = document.querySelector(".input-b");
let inputC = document.querySelector(".input-c");
let submit = document.querySelector(".submit-button");
let result = document.querySelector(".result");

submit.addEventListener("click", () => {
    coA = inputA.value;
    coB = inputB.value;
    coC = inputC.value;
    solveQuadratic(coA, coB, coC);
});

function solveQuadratic(A, B, C) {
    let results = [];
    results.push((B*-1 + (B**2 - 4*A*C)**(1/2))/2*A);
    results.push((B*-1 - (B**2 - 4*A*C)**(1/2))/2*A);
    console.log(results);
}