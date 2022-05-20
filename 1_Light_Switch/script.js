'use-strict'
const bulb = document.getElementById('bulb')

function toggleBulbImage() {
    bulb.src.includes('off') ? bulb.src = './bulb/on_bulb.gif' : bulb.src = './bulb/off_bulb.gif'
}