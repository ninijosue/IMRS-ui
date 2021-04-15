const appCircleElement = document.querySelector(".app_-cycle_container");
const changebleHeadElt = document.querySelector(".left__-app_bar");
const circleNode = document.createElement("div");

const items = [
    {
        name: "banana",
        quanity: 12
    },

    {
        name: "orange",
        quanity: 2
    }
]
/**
 * 
 * @param {Event} evt 
 */
function itemClicked(evt) {
    /**
     * @type {HTMLButtonElement}
     */
    const buttonElt = evt.target;
    const itemData = JSON.parse(buttonElt.dataset.item);
    appCircleElement.innerHTML = itemHistoryData();
    changebleHeadElt.innerHTML = changebleHead(`${itemData.name} history`);
}

function goBack(event){
    appCircleElement.innerHTML = itemsElements();
    changebleHeadElt.innerHTML = `<h1 class="choosen_-title">Home</h1>`;
}

function itemHistoryData() {
    return `
        <div class="history_--row_--by_date">
            <div class="history_-date_-__header">
                <span class="first_-date__separetor--bar"></span>
                <h4 class="day_-date">30/04/2020</h4>
                <span class="second_-date_separetor-bar"></span>
            </div>
            <div class="history_-date_-data_content">
                <h4 class="time_-hour">12h : 30</h4>
                <h4 class="identified_-quantity">+ 1 kg</h4>
            </div>
        </div>
    `
};



function changebleHead(title) {
    return `
        <div class="title_-of__choosen_--and_back">
            <button type="button" onclick={goBack(event)} class="back--_arrow">
              <svg no-click
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000" >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
              </svg>
            </button>
            <h1 class="choosen_-title">${title}</h1>
          </div>
    `
}

function itemsElements(){
    return items.map(item => (`
    <button data-item=${JSON.stringify(item)} onclick="itemClicked(event)" type="button" class="item_-_button">
        <div  class="card__row_-container no-click">
            <div>
                <h2>${item.name}</h2>
            </div>
        <div class="kg_-row no-click">
                <h2>${item.quanity}</h2>
                <h3>Kg</h3>
        </div>
    </button>`
))

}






appCircleElement.innerHTML = itemsElements();