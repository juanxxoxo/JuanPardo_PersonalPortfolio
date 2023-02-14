var form = document.querySelector('#my-form');
var successMessage = document.querySelector('#success-message');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            alert('There was an error submitting the form. Please try again later.');
        }
    };
    xhr.send(formData);
});