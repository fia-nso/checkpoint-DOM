const nb = document.querySelectorAll('.qte')
const prix = document.querySelectorAll('.prix')
const zid = document.querySelectorAll('.zid')
const nguess = document.querySelectorAll('.nguess')
const total = document.querySelector('#total')
const heart = document.querySelectorAll('.fa-heart')
const retirer = document.querySelectorAll('.retirer')
const element = document.querySelectorAll('.element')
let price1 = 0
let price2 = 0
for (let i = 0; i < zid.length; i++) {
    zid[i].addEventListener("click", () => {
        nb[i].value++
        if (i == 0) {
            price1 = nb[i].value * 70
            prix[i].textContent = "$" + `${price1}`
        } else {
            price2 = nb[i].value * 98
            prix[i].textContent = "$" + `${price2}`
        }
        total.value = "$" + `${price1 + price2}`
    })

}

for (let i = 0; i < nguess.length; i++) {
    nguess[i].addEventListener("click", () => {
        if (nb[i].value > 0) {
            if (i == 0) {
                prix[i].textContent = "$" + `${price1-70}`
                total.value = "$" + `${total.value.slice(1) - 70}`
                nb[i].value--
            } else {
                prix[i].textContent = "$" + `${price2-98}`
                total.value = "$" + `${total.value.slice(1) - 98}`
                nb[i].value--
            }
        }
    })

}

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', () => {
        heart[i].classList.toggle('red')
    })
}

for (let i = 0; i < retirer.length; i++) {
    retirer[i].addEventListener('click', () => {
        element[i].remove()
    })
}