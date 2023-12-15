document.addEventListener('DOMContentLoaded', function () {
    fetch('https://open-long-puck.glitch.me')
        .then(response => response.json())
        .then(data => {
            createTable(data)
        })
        .catch(error => console.error('Error fetching data:', error))
})

function createTable(data) {
    const body = document.body

    const table = document.createElement('table')
    
    const thead = document.createElement('thead')
    const headerRow = document.createElement('tr')
    for (const key in data[0]) {
        const th = document.createElement('th')
        th.appendChild(document.createTextNode(key))
        headerRow.appendChild(th)
    }
    thead.appendChild(headerRow)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    data.forEach(function (item) {
        const row = document.createElement('tr')
        for (const key in item) {
            const cell = document.createElement('td')
            if (key === 'image') {
                const img = document.createElement('img')
                img.src = item[key]
                img.alt = item['brand'] + ' ' + item['model']
                img.style.width = '50px'
                cell.appendChild(img)
            } else {
                cell.appendChild(document.createTextNode(item[key]))
            }
            row.appendChild(cell)
        }
        tbody.appendChild(row)
    })
    table.appendChild(tbody)

    body.appendChild(table)
}
