document.querySelectorAll('button').forEach(button => {
	button.addEventListener('click', function () {
		call()
	})
})

function call() {
	alert('clicked!');
};