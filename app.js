const gameArea = document.querySelector('.gameArea');

let initGame = () => {
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
    incObjects.forEach(obj => {
        createObjectSection(obj, gameArea)
    });
}

let updateObj = (obj) => {
    obj.owned = obj.owned + 1;
    incObjects = [...incObjects]

    initGame();
}

let createObjectSection = (obj, parent) => {
    let objDiv = document.createElement("div");
    objDiv.classList.add("obj-div-container");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");

    let img = document.createElement("img");
    img.classList.add("obj-img");
    img.setAttribute("src", obj.image);

    let infoDivContainer = document.createElement('div');
    infoDivContainer.classList.add("info-div-container");

    let nameDiv = document.createElement("div");
    nameDiv.textContent = obj.name;

    let ownedDiv = document.createElement("div");
    ownedDiv.textContent = `Owned: ${obj.owned}`;

    let totalIncreaseDiv = document.createElement("div");
    let totalIncrease = obj.owned * obj.baseIncrease;
    totalIncreaseDiv.textContent = `Worth: ${totalIncrease}/s`;

    let buyDiv = document.createElement('div');
    buyDiv.classList.add("buy-div");

    let buyButton = document.createElement("button");
    buyButton.textContent = "Buy 1";

    buyButton.addEventListener("click", () => {
        updateObj(obj)
    })

    let costDiv = document.createElement("div");
    let totalCost = obj.owned > 0 ? obj.owned * obj.baseCost : obj.baseCost;
    costDiv.textContent = `Cost: ${totalCost}`;

    buyDiv.appendChild(buyButton);
    infoDivContainer.appendChild(nameDiv);
    infoDivContainer.appendChild(ownedDiv);
    infoDivContainer.appendChild(totalIncreaseDiv);
    infoDivContainer.appendChild(costDiv);

    imgDiv.appendChild(img);
    objDiv.appendChild(imgDiv);
    objDiv.appendChild(infoDivContainer);
    objDiv.appendChild(buyDiv);
    parent.appendChild(objDiv);
}

initGame();