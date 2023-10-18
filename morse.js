morseCode = {'A':'.-', 'B': '-...', 'C':'-.-.', 'D':'-..', 'E':'.',
    'F':'..-.', 'G':'--.', 'H':'....', 'I':'..', 'J':'.---',
    'K':'-.-', 'L':'.-..', 'M':'--', 'N':'-.', 'O': '---', 'P':'.--.',
    'Q':'--.-', 'R':'.-.', 'S':'...', 'T':'-', 'U':'..-',
    'V':'...-', 'W':'.--', 'X':'-..-', 'Y':'-.--', 'Z':'--..'};

console.log(morseCode);

e2mInput = document.querySelector(".e2m");
m2eInput = document.querySelector(".m2e");
submitEnglish = document.querySelector(".submit-english");
submitMorse = document.querySelector(".submit-morse")
result = document.querySelector(".result");

submitEnglish.addEventListener("click", () => {
    englishToTranslate = e2mInput.value.toUpperCase()
    englishToTranslate = englishToTranslate.replace(/\s/g, '');
    message = [];
    for (i = 0; i < englishToTranslate.length; i++) {
        char = englishToTranslate[i];
        message.push(morseCode[char]);
    }
    message = message.join(' ');
    result.textContent = `Your message translated to morse is ${message}`;
});