function checkAgeTernary(age) {
    return (age > 18) ? true : confirm("Do your parents approve of this content?");
}
  
function checkAgeOR(age) {
    return (age > 18) || confirm("Are your parents okay with you viewing this content?");
}
  
const button = document.querySelector("#button");
  
button.addEventListener("click", () => {
    checkAgeTernary(age);
    checkAgeOR(age);
});