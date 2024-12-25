// Open the modal and display the selected image
function openModal(imageSrc) {
    // Get the modal element and the modal image
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    // Set the source of the modal image to the clicked image
    modalImage.src = imageSrc;

    // Display the modal
    modal.style.display = 'flex';
}

// Close the modal when the close button or overlay is clicked
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when the escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
