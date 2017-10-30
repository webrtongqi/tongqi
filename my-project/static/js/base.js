exports.install = function (Vue, options) {
	Vue.prototype.handlePrice = function(data){
	  		var _leftPrice = '',
            _rightPrice = '';
            switch (data.bidStatus) {
                case 2:
                    _leftPrice = '<p style="color:#B28147">起拍价&yen;' + data.initialPrice + '</p>';
                    _rightPrice = '<p>1保证金&yen;' +data.bailPrice + '</p>';
                    break;
                case 3:
                    _leftPrice = '<p style="color:#C4311D">当前价&yen;' + data.maxPrice + '</p>';
                    _rightPrice = '<p>起拍价&yen;' + data.initialPrice + '</p>';
                    break;
                default:
                    _leftPrice = '<p style="color:#C4311D">成交价&yen;' + this.formatMoney(data.dealPrice)+ '</p>';
                    _rightPrice = '<p>最高出价&yen;' +  this.formatMoney(data.maxPrice) + '</p>';
                    break;
            }
        return _leftPrice + _rightPrice;
	};
    Vue.prototype.formatMoney = function(value){
         return value >= 10000 ? (value / 10000).toFixed(2) + "万": value;
    }
};