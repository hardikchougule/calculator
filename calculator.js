document.addEventListener('DOMContentLoaded', () => {
    let result = document.getElementById('result');
    let buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (button.id === 'clear') {
                result.textContent = '0';
            } else if (button.id === 'backspace') {
                result.textContent = result.textContent.slice(0, -1);
            } else if (button.id === 'calculate') {
                try {
                    result.textContent = eval(result.textContent);
                } catch (error) {
                    result.textContent = 'Error';
                }
            } else if (button.id === 'sqrt') {
                result.textContent = Math.sqrt(parseFloat(result.textContent));
            } else {
                if (result.textContent === '0' && button.id !== 'decimal') {
                    result.textContent = '';
                }
                result.textContent += button.textContent;
            }
        });
    });
});
