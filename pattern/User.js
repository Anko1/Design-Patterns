function User() {
    this.lastVisitDate = moment().add(-_random(), 'days');
    this.globalDiscount = _random();
    this.nightDiscount = _random();
    this.weekendDiscount = _random();
    this.ordersCount = _random();
    this.ordersTotalPrice = _random();
    this.bonus = _random();

    function _random() {
        var from = 1, to = 20;
        return Math.floor((Math.random() * to) + from);
    }
}
