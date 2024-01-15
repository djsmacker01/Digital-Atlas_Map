document.getElementById('searchButton').addEventListener('click', () => {
    const countryName = document.getElementById('countryInput').value 
    // console.log(countryName) 
    fetchCountryData(countryName)

}) 

async function fetchCountryData(countryName) {
    try {
        const response = await fetch(`/search?country=${countryName}`)
        const data = response.json()
    } catch (error) {
        
    }
}