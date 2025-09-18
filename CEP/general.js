document.querySelectorAll('.product-item').forEach(item => {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Click to View Products';
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(tooltip);

    item.addEventListener('mouseenter', (e) => {
        tooltip.style.opacity = '1';
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY - 30 + 'px';
    });

    item.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY - 30 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});