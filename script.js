let player1Name= document.querySelector("#player1"), player2Name= document.querySelector("#player2"), word, wordTips= document.querySelector("tips-value")

const Form{
  valueName1: document.querySelector("#player1-name"),
  valueName2: document.querySelector("#player2-name"),
  valueWord: document.querySelector ("#next-word"),
  valueTips: document.querySelector ("#next-word-tips"),
  
  nameSubmit(){
    player1Name.value= Form.valueName1.value
    player2Name.value= Form.valueName2.value
    Modal.closeNameSubmit()
  },
  
  wordSubmit(){
    word= Form.valueWord.value
    wordTips.value= Form.valueWordTips.value
    Word.addCharSpaces()
    Modal.closeWordSubmit()
  }
}

const Modal{
  openNameSubmit(){
    document.querySelector("#modal-name-selection").classList.add("active")
  },
  
  closeNameSubmit(){
    document.querySelector("#modal-name-selection").classList.remove("active")
    Modal.openWordSubmit()
  },
  
  openWordSubmit(){
    document.querySelector("#modal-word-selection").classList.add("active")
  },
  
  closeWordSubmit(){
    document.querySelector("#modal-word-selection").classList.remove("active")
  }
}

const Word {
  addCharSpaces(){
    let spacesForAdd= word.lenght(), charsContainer= document.querySelector("#word")
    
    for(let count= 0; count < spacesForAdd; count++)
    let charSpace= document.createElement("input")
    
    charSpace.setAttribute("readonly")
    charSpace.setAttribute("max-lenght", "1")
    charSpace.setAttribute("class", "chars")
    charSpace.setAttribute("id", count)
    
    charsContainer.appendChild(charSpace)
  }
}