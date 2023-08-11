//Button Clear
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    search.value = '';
    main.innerHTML = '';
    background.style.filter = '';
});

