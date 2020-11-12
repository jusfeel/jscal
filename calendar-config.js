function calcTable(year) {

    let arr = new Array(12);
    for (let x = 0; x < arr.length; x++) {
        arr[x] = new Array(6);
    }

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            arr[x][y] = new Array(7);
        }
    }

    for (let month = 0; month < arr.length; month++) {
        let startDayInWeek = new Date(year, month, 0).getDay(); // +1 will start from Sunday
        let monthLong = new Date(year, month + 1,0).getDate() + 1;
        let beforCount = 0;
        let counter = 1;
        let startCount = false;

        [0,1,2,3,4,5].forEach(x => {    
            [0,1,2,3,4,5,6].forEach(y => {                    
                if (beforCount == startDayInWeek) {
                    startCount = true;
                } else {
                    beforCount++;
                }
                if (startCount) {
                    arr[month][x][y] = counter;
                    counter++;
                } else {
                    arr[month][x][y] = "";
                }
                if (counter > monthLong) {
                    arr[month][x][y] = "";
                }
            });
        });
    }

    return arr;
}

module.exports = calcTable;