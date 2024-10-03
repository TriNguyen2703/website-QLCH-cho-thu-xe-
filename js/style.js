document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today
    var dateInput = document.getElementById('date');
    if (dateInput) {
        var today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
    
    // Update total price based on quantity input
    var quantityInput = document.getElementById('quantity');
    var totalPriceElement = document.getElementById('total-price');
    if (quantityInput && totalPriceElement) {
        quantityInput.addEventListener('input', function() {
            const quantity = this.value;
            const pricePerUnit = 3000000;
            const totalPrice = quantity * pricePerUnit;
            totalPriceElement.innerText = totalPrice.toLocaleString('vi-VN');
        });
    }
});
