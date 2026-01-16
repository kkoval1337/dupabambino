function showDetails(carId) {
    const details = document.getElementById('details');
    let info = '';
    if (carId === 'car1') {
        info = 'Toyota Corolla: Rok 2020, Benzyna, Automatyczna skrzynia.';
    } else if (carId === 'car2') {
        info = 'Volkswagen Golf: Rok 2019, Diesel, Manualna skrzynia.';
    } else if (carId === 'car3') {
        info = 'BMW X3: Rok 2021, Benzyna, Automatyczna skrzynia, SUV.';
    }
    details.innerHTML = `<p>Szczegóły: ${info}</p>`;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.innerHTML = '<p style="color:red;">Wypełnij wszystkie pola!</p>';
    } else {
        formMessage.innerHTML = '<p style="color:green;">Wiadomość wysłana! (Symulacja)</p>';
        // Tutaj możesz dodać prawdziwe wysyłanie, np. przez API, ale na razie symulacja
    }
}
