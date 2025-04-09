async function updateFood() {
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const availability = document.querySelector('select[name="availability"]').value;
    const id = document.getElementById('food-id').value;
    console.log({
        id,
        name,
        description,
        price,
        availability
    })
    const res = await fetch(`/food`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name, description, price, availability })
    });
    if (res.ok) {
        alert('Food item updated successfully!');
    } else {
        alert('Failed to update food item.');
    }
}