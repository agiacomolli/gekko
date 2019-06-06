var strat = {};

strat.init = function() {
  this.currentTrend = 'short';
  this.toUpdate = false;

  this.low = this.settings.thresholds.low;
  this.high = this.settings.thresholds.high;
}

strat.update = function(candle) {

  this.toUpdate = false;

  if (candle.close <= this.low) {
    this.toUpdate = true;
    this.currentTrend = 'long';
  }

  if (candle.close >= this.high) {
    this.toUpdate = true;
    this.currentTrend = 'short';
  }
}

strat.check = function() {
  if (!this.toUpdate) {
    return;
  }

  if (this.currentTrend === 'short') {
    console.log('### go short');
    this.advice('short');

  } else {
    console.log('### go long');
    this.advice('long');
  }
}

module.exports = strat;

