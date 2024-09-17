document.getElementById('voucherForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const resultDiv = document.getElementById('result');
    const url = `https://api.teeg.cloud/vouchers/campaigns/VPBE5ZJ/cards/${cardNumber}?tz=MIDAB38D4F`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzIxMTQzMTA5LCJuYmYiOjE3MjExNDIyMDksImlwQWRkcmVzcyI6IjEwNC4yOC4yNDcuMTM1Iiwib2lkIjoiNjBhOTU1MzctNjNjNy00YmU2LTliYmEtNDk2MzRjNmM4Y2JkIiwic3ViIjoiNjBhOTU1MzctNjNjNy00YmU2LTliYmEtNDk2MzRjNmM4Y2JkIiwiZW1haWxzIjpbImFndXMud2l3ZWthNjVAZ21haWwuY29tIl0sInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiZDRjNGM4MmMtNmIwNC00YTNjLWFkMDMtOGQ1NjIxZTg1MTliIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MjExNDIyMDl9.Xlq40jd91_7eguFwvyUJx_kTQKgRxFI9IWMet-Cic8QPmehxVnmR6EjRLc4GJPZLasysretBMeEO6fJfEo6qWj-V_BN52_CddbfnHnhKU1XMK97Rvpu6WSYiqYkpaH5rwlbcgTiOZGEZKoviw8w1Xg_5moZxBFb_gAMXA0s9s3uzUHIPpSqXOZhPdEoepZsNUlifTuqBYWE4_gBLZCYCv3H3HOz38m4JWj4YzcZCqKXdBFLR1hlbe4j3lBHOvrJ3qQpvvmYdVIi8qe8VfcHaz3rvrllwR1Nc-F3ELw6dn5_1Fzvu5Biloz_jfJmCovKN351A6daSRD39L49akF5G5A'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.voucher) {
            resultDiv.textContent = `Voucher: ${data.voucher}`;
        } else {
            resultDiv.textContent = 'Voucher tidak ditemukan atau terjadi kesalahan.';
        }
    })
    .catch(error => {
        resultDiv.textContent = 'Error: ' + error.message;
    });
});
