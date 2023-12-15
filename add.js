document.addEventListener('DOMContentLoaded', function () {
    const addCarForm = document.getElementById('addCarForm')
    const notificationArea = document.getElementById('notification')

    addCarForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const brand = document.getElementById('brand').value
        const model = document.getElementById('model').value
        const carData = { brand: brand, model: model }

        fetch('https://open-long-puck.glitch.me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData),
        })
        .then(response => response.json())
        .then(data => {
            showNotification('success', 'Car added successfully!')
            console.log('Car added successfully:', data)
        })
        .catch(error => {
            showNotification('error', 'Error adding car. Please try again.')
            console.error('Error adding car:', error)
        })
    })

    function showNotification(type, message) {
        const notification = document.createElement('div')
        notification.className = 'notification ' + type
        notification.innerHTML = message

        notificationArea.innerHTML = ''
        notificationArea.appendChild(notification)

        setTimeout(function () {
            notificationArea.innerHTML = ''
        }, 5000)
    }
})
