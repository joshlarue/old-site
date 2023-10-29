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
    englishToTranslate = e2mInput.value.toUpperCase().replace(/\W/g, '');
    message = [];
    for (i = 0; i < englishToTranslate.length; i++) {
        char = englishToTranslate[i];
        message.push(morseCode[char]);
    }
    message = message.join(' ');
    result.textContent = `Your message translated to morse is ${message}`;
});

submitMorse.addEventListener("click", () => {
    morseToTranslate = m2eInput.value.split(' ');
    console.log(morseToTranslate);
    message = [];
    for (i = 0; i < morseToTranslate.length; i++) {
        char = morseToTranslate[i];
        for (key in morseCode) {
            if (morseCode[key] == char) {
                message.push(key);
            }
        }
    }
    message = message.join('');
    result.textContent = `Your message translated to english is ${message}`;
});