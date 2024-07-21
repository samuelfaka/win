function play() {
    const minPrice = 9;
    const ready = document.querySelector(".ready");
    const errorPrice = document.querySelector(".error-prices");
    const usd = document.querySelector(".usd");
    let pricesInput = document.querySelector(".prices").value;
    let prices = parseFloat(pricesInput);

    if (!pricesInput) {
        ready.style.display = "flex";
        errorPrice.style.display = "none";
    } else if (prices <= minPrice || prices === minPrice) {
        errorPrice.style.display = "flex";
        ready.style.display = "none";
    } else {
        ready.style.display = "none";
        errorPrice.style.display = "none";
        usd.textContent = `$${prices}`;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const usd = document.querySelector(".usd");
    usd.textContent = `$10.00`;
});