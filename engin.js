let mufunc = () => {
    let totalShow = document.getElementById('totalShow');
    let totalShowStr = totalShow.innerText;
    totalShowStr = Number.parseFloat(totalShowStr)

    let priceStr = event.target.parentNode.parentNode.children[2].innerText.split(' ')[1];
    let priceNum = Number.parseFloat(priceStr)

    let total = totalShowStr + priceNum;
    totalShow.innerText = total;

    // step 02
    let showLi = document.getElementById('showLi');
    let li = document.createElement('li');
    li.innerText = event.target.parentNode.parentNode.firstElementChild.innerText;

    li.classList = 'shadow-sm px-2 shadow-black'
    showLi.appendChild(li);

    let grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = total;
    if(showLi.childElementCount >= 2){
        let discPrice = document.getElementById('discPrice');
        discPrice.innerText = '200$';
        grandTotal.innerText = total - 200
    }

    console.log(showLi.childElementCount)

}