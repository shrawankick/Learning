
function possiblePositions(i,j) {
    if (i >= 0 && i <= 2 && j >= 0 && j <= 2) {
        if (condition(i, j, i, j - 1)) return 1;
        if (condition(i, j, i, j + 1)) return 2;
        if (condition(i, j, i - 1, j)) return 3;
        if (condition(i, j, i + 1, j)) return 4;
       
    } 
	console.log("Did not click on the correct box" + i + ", " + j);
	return 0;
} 

function condition(initialI, initialJ, finalI, finalJ) {
    if (
        (finalJ < 0 || finalJ > 2) ||
        (finalI < 0 || finalI > 2)) {
        console.log("error");
        return false;
    }
    if (a[finalI][finalJ] === "") {
        swaping(initialI, initialJ, finalI, finalJ);
    } else {
        return false;
    }
    return true;
}

function printArray(a) {
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log();

}

function swaping(i1, j1, i2, j2) {
	var zero = a[i1][j1];
	var replaceWith = a[i2][j2];
	a[i1][j1] = replacelaceWith;
	
	a[i2][j2] = zero;
}

function showArray() {
	var i;
	var j;
	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			$('#' + i + "" + j).html('<br/>' + a[i][j]);
		}
	}
}
function myFunction(btn){
var interval = setInterval(function() {
    var timer = $('span').html();
    timer = timer.split(':');
    var hours = parseInt(timer[0], 10);
    var minutes = parseInt(timer[1], 10);
    var seconds = parseInt(timer[2], 10);
    seconds += 1;
    if (seconds > 59) {
        minutes += 1;
        seconds = 00;
        if (minutes > 59) {
            hours += 1;
            minutes = 00;
        }
    }
    if (hours < 10 && hours.length != 2) hours = '0' + hours;
    if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
    if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;
    $('span').html(hours + ':' + minutes + ':' + seconds);
    
    if (hours == 0 && minutes == 0 && seconds == 0)
        clearInterval(interval);
}, 1000);
btn.setAttribute('disabled', true);
}

