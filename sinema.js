const totalSeats = 200;
const ticketPrice = 30; // Bilet fiyatı varsayılan olarak 30 TL
let selectedSeat = null;

function createSeats() {
    const seatsContainer = document.querySelector('.seats-container');

    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = i;
        seat.addEventListener('click', selectSeat);
        seatsContainer.appendChild(seat);
    }
}

function selectSeat() {
    if (!this.classList.contains('selected')) {
        if (selectedSeat) {
            selectedSeat.classList.remove('selected');
        }
        this.classList.add('selected');
        selectedSeat = this;
        showTicketDetails();
    }
}

function showTicketDetails() {
    const selectedSeatNumberElement = document.getElementById('selectedSeatNumber');
    const ticketPriceElement = document.getElementById('ticketPrice');
    selectedSeatNumberElement.textContent = selectedSeat.textContent;
    ticketPriceElement.textContent = ticketPrice;
}

function goToPaymentScreen() {
    if (selectedSeat) {
        const paymentScreen = document.getElementById('paymentScreen');
        paymentScreen.style.display = 'block';
    } else {
        alert('Lütfen bir koltuk seçin.');
    }
}

function completePayment(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;

    if (cardNumber && cardHolder && expiryDate) {
        // Burada gerçek bir ödeme işlemi yapılabilir.
        alert('Ödeme işlemi başarıyla tamamlandı.');
        resetSeats();
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}

function resetSeats() {
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.classList.remove('selected');
    });
    selectedSeat = null;

    const paymentScreen = document.getElementById('paymentScreen');
    paymentScreen.style.display = 'none';
}

createSeats();
