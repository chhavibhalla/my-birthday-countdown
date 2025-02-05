// 
const enddate = "June 26, 2025 11:55:00";
document.getElementById("end-date").innerText = enddate;
const input = document.querySelectorAll(".boxes input");

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    let diff = (end - now) / 1000;

    if (diff < 0) {
        input[0].value = input[1].value = input[2].value = input[3].value = input[4].value = "00";
        return;
    }

    const months = Math.floor(diff / (30.44 * 86400));
    diff %= (30.44 * 86400);
    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff % 60);

    input[0].value = months;
    input[1].value = days;
    input[2].value = hours;
    input[3].value = minutes;
    input[4].value = seconds;
}

setInterval(clock, 1000);
clock();
