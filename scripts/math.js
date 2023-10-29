let prompt = document.querySelector(".prompt");
let inputA = document.querySelector(".input-a");
let inputB = document.querySelector(".input-b");
let inputC = document.querySelector(".input-c");
let submit = document.querySelector(".submit-button");
let result = document.querySelector(".result");

submit.addEventListener("click", () => {
    coA = parseFloat(inputA.value);
    coB = parseFloat(inputB.value);
    coC = parseFloat(inputC.value);
    solveQuadratic(coA, coB, coC);
});

function solveQuadratic(A, B, C) {
    let results = [];
    results.push((-B + Math.sqrt(B*B - 4*A*C))/(2*A));
    results.push((-B - Math.sqrt(B*B - 4*A*C))/(2*A));
    console.log(results);
}