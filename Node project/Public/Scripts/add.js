async function addFood() {
    const foodId = document.getElementById('food-id').value;
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const availability = document.getElementById('availability').value;

    
    const response = await fetch('/food/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: foodId,
            name: name,
            description: description,
            price: price,
            availability: availability
        })
    });

    if (response.ok) {
        alert('Food item added successfully!');
        location.href = '/food';
    } else {
        alert('Failed to add food item. Please try again.');
    }
}