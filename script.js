document.getElementById('voucherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const resultDiv = document.getElementById('voucherResult');

    resultDiv.textContent = ''; // Clear previous result
    resultDiv.className = 'result'; // Reset result class

    if (!cardNumber) {
        resultDiv.textContent = 'Nomor kartu harus diisi.';
        resultDiv.classList.add('error');
        return;
    }

    const url = `https://api.teeg.cloud/vouchers/campaigns/09B2GWE/cards/${cardNumber}?tz=MIDT8YBUO2`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI5ODMyMjU3LCJuYmYiOjE3Mjk4MzEzNTcsImlwQWRkcmVzcyI6IjExNC4xMjUuOTMuNDgiLCJpcGFkZHIiOiIxMTQuMTI1LjkzLjQ4Iiwib2lkIjoiNTYyYzViYjEtOTFiMS00YTQwLTg5ZGEtMGZmNTlkYTRhMjhhIiwic3ViIjoiNTYyYzViYjEtOTFiMS00YTQwLTg5ZGEtMGZmNTlkYTRhMjhhIiwiZW1haWxzIjpbImFkcmlhbmlzZW4xMjI5QGdtYWlsLmNvbSJdLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6ImY3ZTNmNWVkLWY0MDItNDU3Mi05NjFjLTI3NDdjNzMwMmJiYyIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzI5ODMxMzU3fQ.eFq28NrtT1WK76KW5eM8HbI5vyzvRfinDq4DwEniG0dRkPXMkmza6hUVXKJ6GobUwjgeOltU2S1LJEZ2m8uzX94fcyb6S_Ag8m5YUp0GxuPMLZhSG5hCbm7rzkaQO7GXdE4QKBDc60mzUbmDEUIs7bhtIipW9bgdLOXUMWV6YTQIQktP42hxEGDXqmGZxjP-KpYIpS9BZODTnZEXtFml0r7LvVS7eFCESKYV66nrS6ewoB9Nmkt5ysg8xbzCGOvRvoQ2_raFi6n-s_lxjSpjdrAtFWw-SctkOPB0bpnf34ZVcrq0revZYVqdNRbMPtXwzZXqF94IdGM1vDF5COA9kA'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Terjadi kesalahan pada server.');
        }
        return response.json();
    })
    .then(data => {
        if (data) {
            resultDiv.textContent = `Voucher berhasil di-generate: ${JSON.stringify(data)}`;
            resultDiv.classList.add('success');
        } else {
            resultDiv.textContent = 'Voucher tidak ditemukan.';
            resultDiv.classList.add('error');
        }
    })
    .catch(error => {
        resultDiv.textContent = 'Terjadi kesalahan saat menghubungi server.';
        resultDiv.classList.add('error');
        console.error('Error:', error);
    });
});
