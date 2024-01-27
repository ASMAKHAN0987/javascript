// selectors and variables
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const load = document.querySelector(".load");
const wordy = document.getElementById("wordy");
const example = document.querySelector(".example p");
const searchBtn = document.getElementById("searchBtn");
const cross = document.getElementById("cross");
const inputWord = document.getElementById("search");
const phonetic = document.getElementById("phonetic");
console.log(phonetic);
const meaning = document.querySelector("#wordMeaing p");
const PartOfSpeech = document.querySelector(".details");
console.log("parts of speech", PartOfSpeech.firstElementChild);
const synonyms = document.querySelector(".synonym p");
const volumeIcon = document.querySelector("#sound");
// global variables
let audio;
let alertForNotDefineWord;
// dataFilling function in which all the information of dic API will be stored in selectors.
function dataFilling(responseText) {
  
  if (responseText.title) {
    alertForNotDefineWord = responseText.title;
  }
  load.classList.add("hide");
  result.classList.remove("hide");
  let define = responseText[0].meanings[0].definitions[0];
  wordy.innerHTML = responseText[0].word;
  PartOfSpeech.firstElementChild.innerHTML =
    responseText[0].meanings[0].partOfSpeech;
  if (responseText[0].phonetics[0])
    phonetic.innerHTML =
      responseText[0].phonetics[0].text || responseText[0].phonetics[1].text;
  meaning.innerHTML = define.definition;
  if (define.example) {
    example.parentElement.classList.remove("hide");
    example.innerHTML = define.example;
  } else example.parentElement.classList.add("hide");
  if (responseText[0].meanings[0].synonyms[0]) {
    synonyms.innerHTML = "";
    synonyms.parentElement.classList.remove("hide");
    for (let i = 0; i < 4; i++) {
      if (responseText[0].meanings[0].synonyms[i]) {
        let tag = `<span id="span" onclick="span('${responseText[0].meanings[0].synonyms[i]}')">${responseText[0].meanings[0].synonyms[i]},</span>`;
        synonyms.insertAdjacentHTML("beforeend", tag);
      }
    }
  } else {
    synonyms.parentElement.classList.add("hide");
  }
  audio = new Audio();
  responseText[0].phonetics.forEach((element) => {
    if (element) {
      audio.src = element.audio;
    } else {
      audio.src = "";
    }
  });
}
// API FUNCTION
async function dictionaryApi(input) {
  load.innerText = `searching the word ${input}....`;
  try {
    const response = await fetch(`${url}${input}`);
    const responseText = await response.json();
    dataFilling(responseText);
  } catch (error) {
    addRemoveHide();
    console.log(error);
    if (alertForNotDefineWord) {
      alert(alertForNotDefineWord);
      load.innerHTML = `can't find the meaning of ${input}`;
    } else {
      alert("checkout your internet connection...");
      load.innerHTML = `checkout your internet connection...`;
    }
  }
}
searchBtn.addEventListener("click", (event) => {
    addRemoveHide();
  // preventEvent
  dictionaryApi(inputWord.value);
  event.preventDefault();
});
volumeIcon.addEventListener("click", () => {
  if (audio.getAttribute("src") == "") {
    alert("no audio available of it");
  } else {
    audio.play();
  }
});
function span(targetWord) {
  let word = targetWord;
  addRemoveHide();
  inputWord.value = word;
  load.innerText = `searching the word ${word}....`;
  dictionaryApi(word);
}
cross.addEventListener("click", () => {
  inputWord.value = "";
  addRemoveHide();
  load.innerText = `type a word and press enter to get the meaning, example, pronunciation
    and synonym of that typed word....`;
});
function addRemoveHide(){
  result.classList.add("hide");
  load.classList.remove("hide");
}
