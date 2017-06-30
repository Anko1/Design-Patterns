function getDiscount(user) {
    var total = user.globalDiscount;

    if(isNight()) total += user.nightDiscount;
    if(isWeekend()) total += user.weekendDiscount;

    return total;
}

function getBonus(user) {
    const maxBonus = 240;

    var diff = Math.floor(moment.duration(moment().diff(user.lastVisitDate)).asDays());

    return maxBonus - diff + user.ordersCount;
}

var isNight = function () {
    const cur = moment().hour(23);
    const nStart = moment().startOf('day').hour(23);
    const nEnd = moment().add(1, 'days').startOf('day').hour(5);

    // console.log(nStart);
    // console.log(nEnd);

    return cur.isBefore(nEnd) && cur.isAfter(nStart);
};

var isWeekend = function () {
    var day = moment().day();
    return (day == 6) || (day == 0);    // 6 = Saturday, 0 = Sunday
};

console.log(getBonus(new User()));
