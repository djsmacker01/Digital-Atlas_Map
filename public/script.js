document.getElementById('searchButton').addEventListener('click', () => {
    const countryName = document.getElementById('countryInput').value 
    console.log(countryName) 
    fetchCountryData(countryName)

}) 

async function fetchCountryData(countryName) {
    const messageElement = document.getElementById('message')
    const resultsElement = document.getElementById('results')


    try {
        const response = await fetch(`/search?country=${countryName}`)
        const data = response.json()

        if (data.length ===1) {
            displayCountryInfo(data[0],resultsElement)
        } else {
            displayCountryList(data,resultsElement)
            
        }
        // console.log(data)
    } catch (error) {
        console.log(error)
        messageElement.textContent = "No result Found. Please check your spelling and try again."
    }
}

function displayCountryInfo(countryData, container) {
    const languages = Object.values(countryData.languages).join(', ')
    const currencies = 

    container.innerHTML = `
    <div class="country-name">${countryData.name.common}</div>
    <div class="country-name">${countryData.name.official}</div>
    <p><strong>Capital:</strong>${countryData.capital? countryData.capital.join(','): 'Not Available'}</p>
    <p><strong>Region:</strong>${countryData.region}</p>
    <p><strong>Population:</strong>${countryData.population.toLocaleString()}</p>
    <p><strong>Languages:</strong>${languages}</p>
    <p><strong>Capital:</strong></p>
    <p><strong>Capital:</strong></p>
    <p><strong>Capital:</strong></p>
    <p><strong>Capital:</strong></p>
    <p><strong>Capital:</strong></p>
    <p><strong>Capital:</strong></p>
    
    `
    
}