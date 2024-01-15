document.getElementById('searchButton').addEventListener('click', () => {
    const countryName = document.getElementById('countryInput').value 
    console.log(countryName) 
    fetchCountryData(countryName)

}) 

async function fetchCountryData(countryName) {
    const messageElement = document.getElementById('message')
    try {
        const response = await fetch(`/search?country=${countryName}`)
        const data = response.json()
        // console.log(data)
    } catch (error) {
        console.log(error)
        messageElement.textContent = "No result Found. Please check your spelling and try again."
    }
}