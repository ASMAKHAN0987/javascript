const SELECTIONS = [
    {
      name: "rock",
      emoji: "✊",
      beats: "scissor",
    },
    {
      name: "paper",
      emoji: "✋",
      beats: "rock",
    },
    {
      name: "scissor",
      emoji: "✌️",
      beats: "paper",
    },
  ];
const selectionButtons = document.querySelectorAll('[data-selection]');
selectionButtons.forEach(selectionButton=>{
    selectionButton.addEventListener('click',e=>{
          const selectionName = selectionButton.dataset.selection;
          const selection = SELECTIONS.find(selection => selection.name === selectionName);
          randomSelection();
          makeSelection (selection);
    }) 
})
function makeSelection(selection){
 const computerSelection = randomSelection();
 const yourWinner = isWinner(selection,computerSelection);
 const computerWinner = isWinner(computerSelection,yourWinner);
}
function randomSelection(){
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length);
    return SELECTIONS[randomIndex];
}
function isWinner(selection,opponent){
 return selection.beats === opponent.name;
}