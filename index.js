let option = document.querySelectorAll('.option')
let options = document.querySelector('.options')
let pickedOption = document.querySelector('.pickedOption')
let compOption = document.querySelector('.compOption')
let btnDiv = document.querySelector('.btnDiv')
let gameOptionDiv = document.querySelector(".gameOptionDiv")
let clickedContainer = document.querySelector('.clickedContainer')
let resultText = document.querySelector('.resultText')
let resultText2 = document.querySelector('.resultText2')
let resultDiv = document.querySelector('.resultDiv')
let playAgainDiv = document.querySelector(".playAgainDiv")
let playAgain = document.querySelector('.playAgain2')
let playAgain2 = document.querySelector('.playAgain')
let scoreValue = document.querySelector('.scoreValue')
let btnRules = document.querySelector('.btnRules')
let emptyDiv = document.querySelector('.emptyDiv')
let selectDiv = document.querySelector(".selectDivComp")
let selectDivUser = document.querySelector(".selectDivUser")

let score = 0


option.forEach((option) => {
    option.addEventListener('click', () => {
        let selectedId = option.id
        console.log(selectedId, 'option clicked')
        startGame(selectedId)
    })


})


let houseOption = (selectedId) => {
    let houseOptions = ["Scissors", "Paper", "Rock"]
    let housePickIndex = Math.floor(Math.random() * 3)
    let housePick = houseOptions[housePickIndex]
    console.log(housePick, "house picked")
    let addSelectOne = options.querySelector(`.option[id="${housePick}"]`)
    let cloneSelectOne = addSelectOne.cloneNode(addSelectOne)
    cloneSelectOne.classList.add('pulse')
    cloneSelectOne.style.display = "flex"
    let span1 = document.createElement('span')
    span1.classList.add('span1');
    let span2 = document.createElement('span')
    span2.classList.add('span2');
    let span3 = document.createElement('span')
    span3.classList.add('span3');
    let span4 = document.createElement('span')
    span4.classList.add('span4');

    selectDiv.appendChild(span1)
    selectDiv.appendChild(span2)
    selectDiv.appendChild(span3)
    selectDiv.appendChild(span4)

    let SelectedbtnDiv = cloneSelectOne.querySelector('.btnDiv')
    SelectedbtnDiv.classList.add("new-btn-style")
    cloneSelectOne.classList.add("clone-select-one")

    let selectSpan = selectDiv.querySelectorAll("span")
    selectSpan.forEach((span) => {
        span.classList.add("hide")
    })


    let svg = cloneSelectOne.querySelector('.optionSvgs')
    svg.style.height = "5.5rem"
    setTimeout(() => {
        emptyDiv.classList.add('hide')
        selectDiv.appendChild(cloneSelectOne)
        console.log(cloneSelectOne, "this is clone")
        console.log(selectDiv.innerHTML, "this is selected div")
        let div = cloneSelectOne.querySelector('.option')
        div.classList.remove(".hide")
        div.style.display = "flex"
    }, 2000);
    console.log(cloneSelectOne, "this is append Child")
    return housePick
}

let showWinner = (userWinner, selectedId, houseSelectedId) => {
    if (userWinner) {
        console.log("User wins!")
        setTimeout(() => {
            let selectSpan = selectDivUser.querySelectorAll('span')
            selectSpan.forEach((span) => {
                span.classList.remove('hide')
            })
            resultText.textContent = "YOU WIN"
            resultText2.textContent = "YOU WIN"
            score++
            console.log("Score: " + score)
            scoreValue.innerText = score
        }, 2000);



    } else {
        setTimeout(() => {
            let selectSpan = selectDiv.querySelectorAll('span')
            selectSpan.forEach((span) => {
                span.classList.remove('hide')
            })
            resultText.textContent = "YOU LOSE"
            resultText2.textContent = "YOU LOSE"
            score--
            console.log("Score: " + score)
            scoreValue.innerText = score
        }, 2000);
    }

}




let checkWinner = (selectedId) => {
    const houseSelectedId = houseOption(selectedId)
    if (selectedId === houseSelectedId) {
        console.log("It's a tie!")
        setTimeout(() => {
            resultText.textContent = "DRAW"
            resultText2.textContent = "DRAW"
        }, 2000);
    } else {
        let userWinner = true
        if (selectedId === "Rock") {
            userWinner = houseSelectedId === "Scissors" ? true : false
        } else if (selectedId === "Paper") {
            userWinner = houseSelectedId === "Rock" ? true : false
        } else if (selectedId === "Scissors") {
            userWinner = houseSelectedId === "Paper" ? true : false
        }
        console.log(userWinner, selectedId, houseSelectedId)
        showWinner(userWinner, selectedId, houseSelectedId)
    }
    setTimeout(() => {
        resultDiv.classList.remove("hide")
        playAgainDiv.classList.remove("hide")
        playAgain.classList.remove('hide')
        playAgain2.classList.remove('hide')
    }, 2000);

}


let startGame = (selectedId) => {
    // option.style.display = "none"
    console.log(selectedId, 'option')
    option.forEach((option) => {
        option.style.display = "none"
        if (option.id === selectedId) {
            option.style.display = "flex"
            gameOptionDiv.classList.add('hide')


            let SelectedbtnDiv = option.querySelector('.btnDiv')

            SelectedbtnDiv.classList.add("new-btn-style")
            option.classList.add("clone-select-one")

            let svg = option.querySelector('.optionSvgs')
            svg.style.height = "6rem"
            clickedContainer.classList.remove("hide")

            let optionClone = option.cloneNode(true)
            optionClone.classList.add('pulse')
            let span1 = document.createElement('span')
            span1.classList.add('span1');
            let span2 = document.createElement('span')
            span2.classList.add('span2');
            let span3 = document.createElement('span')
            span3.classList.add('span3');
            let span4 = document.createElement('span')
            span4.classList.add('span4');

            selectDivUser.appendChild(span1)
            selectDivUser.appendChild(span2)
            selectDivUser.appendChild(span3)
            selectDivUser.appendChild(span4)

            selectDivUser.appendChild(optionClone)
            let selectSpan = selectDivUser.querySelectorAll("span")
            selectSpan.forEach((span) => {
                span.classList.add("hide")
            })

            checkWinner(selectedId)
        }
    })
}

playAgain.addEventListener("click", () => {
    gameOptionDiv.classList.remove('hide')
    option.forEach((option) => {
        option.style.display = "flex"
        option.style.cssText = ""
        let btnDiv = option.querySelector(".btnDiv")
        btnDiv.classList.remove("clone-select-one")
        btnDiv.classList.remove("new-btn-style")
        btnDiv.style.cssText = ""
        resultText.textContent = ""
        resultText2.textContent = ""
        playAgain.classList.add("hide")
        resultDiv.classList.add("hide")
        playAgainDiv.classList.add("hide")
        let svg = option.querySelector('.optionSvgs')
        svg.style.cssText = ""
        emptyDiv.classList.remove('hide')
        selectDiv.innerHTML = ""
        selectDivUser.innerHTML = ""
        option.classList.remove("new-btn-style")
        option.classList.remove("clone-select-one")

    })


    clickedContainer.classList.add("hide")
    selectDiv.querySelector("button").remove()
    selectDivUser.querySelector("button").remove()
})

playAgain2.addEventListener("click", () => {
    gameOptionDiv.classList.remove('hide')
    option.forEach((option) => {
        option.style.display = "flex"
        option.style.cssText = ""
        let btnDiv = option.querySelector(".btnDiv")
        btnDiv.classList.remove("clone-select-one")
        btnDiv.classList.remove("new-btn-style")
        btnDiv.style.cssText = ""
        resultText.textContent = ""
        resultText2.textContent = ""
        playAgain2.classList.add("hide")
        resultDiv.classList.add("hide")
        playAgainDiv.classList.add("hide")
        let svg = option.querySelector('.optionSvgs')
        svg.style.cssText = ""
        emptyDiv.classList.remove('hide')
        selectDiv.innerHTML = ""
        selectDivUser.innerHTML = ""
        option.classList.remove("new-btn-style")
        option.classList.remove("clone-select-one")
    })

    clickedContainer.classList.add("hide")
    selectDiv.querySelector("button").remove()
    selectDivUser.querySelector("button").remove()
})



btnRules.addEventListener("click", () => {
    let absoluteDiv = document.querySelector(".absoluteDiv")
    absoluteDiv.classList.remove("hide")


    let closeBtn = document.querySelector(".closeBtn")

    closeBtn.addEventListener("click", () => {
        absoluteDiv.classList.add("hide")
    })



})