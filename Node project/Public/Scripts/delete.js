async function deleteFood(id) {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
        const response = await fetch(`/food/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            alert("Item deleted successfully!");
            location.reload(); // refresh the page to see the changes
        } else {
            alert("Failed to delete item. Please try again.");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred while deleting the item.");
    }
}