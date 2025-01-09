function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes + ':' + seconds;

    var daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var dayOfWeek = daysOfWeek[currentTime.getDay()];
    var day = currentTime.getDate().toString().padStart(2, '0');
    var month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    var year = currentTime.getFullYear();

    var dateString = dayOfWeek + ', ' + day + '/' + month + '/' + year;

    document.getElementById('jam').textContent = timeString;
    document.getElementById('tanggal').textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();

const links = document.querySelector('.main-links');
const sublinks = links.querySelectorAll('a');

sublinks.forEach(sub => {
    sub.addEventListener('click', function (event) {

        if (this.classList.contains('show')) {
            this.classList.remove('show');
        }else {
            this.classList.add('show');
        }
    });
})

