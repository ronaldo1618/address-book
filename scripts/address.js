const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `
})

document.getElementById("saveWishlist").addEventListener("click", event => {
    const favoriteThing = document.getElementById("favorite-thing").value
    const placeToBuy = document.getElementById("place-to-buy").value
    container.innerHTML += `
        <h2>I can purchase ${favoriteThing} at ${placeToBuy}
    `
})