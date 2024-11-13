document.addEventListener('DOMContentLoaded', () => {
    const initialValues = {
        steps: 75,
        calories: 30,
        water: 60
    };
    // let name= prompt('Enter Your Name :');
    document.querySelectorAll('.sect').forEach(section => {
        const metric = section.dataset.metric;
        const progressBar = section.querySelector('[data-progress]');
        const initialValue = initialValues[metric] || 50;
        progressBar.style.width = `${initialValue}%`;
        
        section.addEventListener('click', (e) => {
            const control = e.target.getAttribute('data-control');
            if (!control) return;

            let currentWidth = parseFloat(progressBar.style.width);
            const change = control === 'increase' ? 5 : -5;
            
            const newWidth = Math.min(Math.max(currentWidth + change, 0), 100);
            
            progressBar.style.transition = 'width 0.3s ease-in-out';
            progressBar.style.width = `${newWidth}%`;

            const heading = section.previousElementSibling;
            if (heading && heading.tagName === 'H2') {
                const originalText = heading.getAttribute('data-original-text') || heading.textContent;
                if (!heading.getAttribute('data-original-text')) {
                    heading.setAttribute('data-original-text', originalText);
                }
                heading.textContent = `${originalText} - ${Math.round(newWidth)}%`;
            }
        });
    });
});