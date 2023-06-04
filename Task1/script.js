const bigImage = document.querySelector('.product-image-big');
        const smallImages = document.querySelectorAll('.product-image-small');
        const priceElement = document.querySelector('.product-price');
        const dimensionsDropdown = document.getElementById('dimensions');
        const addToCartButton = document.querySelector('.product-button');
        const quantityInput = document.getElementById('quantity');


        smallImages.forEach(image => {
            image.addEventListener('click', () => {
                const activeImage = document.querySelector('.active-image');
                activeImage.classList.remove('active-image',);
                image.classList.add('active-image');
                bigImage.src = image.src;
            });
        });

        dimensionsDropdown.addEventListener('change', () => {
            const selectedValue = dimensionsDropdown.value;
            let price = 3305; // Default price

            // Update price based on selected dimensions
            if (selectedValue === 'large') {
                price = 4500; // Update price for large dimensions
            } else if (selectedValue === 'medium') {
                price = 3500; // Update price for medium dimensions
            } else if (selectedValue === 'small') {
                price = 2500; // Update price for small dimensions
            }

            priceElement.textContent = `₹ ${price.toFixed(2)}`; // Update the displayed price
        });

        addToCartButton.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  const price = parseFloat(priceElement.textContent.replace('₹ ', ''));

  const totalAmount = price * quantity;
  
  // Show popup with cart information
  alert(`Product added to cart! \n Total Amount: ₹ ${totalAmount.toFixed(2)}`);
});