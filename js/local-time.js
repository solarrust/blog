const localTime = document.querySelector('.local__time')

function timedUpdate () {
  localTime.innerText = moment().format('MMMM Do YYYY, h:mm a')
  setTimeout(timedUpdate, 10000);
}

timedUpdate()
