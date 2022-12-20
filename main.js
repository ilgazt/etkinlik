const kutu = document.getElementById("tekKutu")

kutu.addEventListener("mouseover", () => {
    kutu.style.backgroundColor = "purple"
    
})
kutu.addEventListener("mouseleave", () => {
    kutu.style.backgroundColor = "red"
})
console.log("selam");