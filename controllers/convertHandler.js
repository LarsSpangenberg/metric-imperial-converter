/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  
  this.getNum = function(input) {
    var result;
    var num = input.slice(0, input.match(/[a-z]/i).index) || '1';
    
    if(num.includes('/')) {
      var arr = num.split('/');
      num = arr.length <= 2 ? 
        (Math.round((arr[0] / arr[1]) * 1000)/1000) : 
        'invalid number';
    }
    
    result = num
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var accepted = ['gal','l','mi','km','lbs','kg'];
    var unit = input.slice(input.match(/[a-z]/i).index);
    if(accepted.indexOf(unit.toLowerCase()) !== -1) {
      result = unit;
    } else {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
    }
    return result;
  };
  
  this.spellOutUnit = this.spellOutUnit.bind(this);
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const decimalPlaces = 1000000; // refer to rounding function: Math.round(convertedNumber*decimalPlaces)/decimalPlaces
    
    var result;
    
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = rounding(galToL, '*');
        break;
      case 'l':
        result = rounding(galToL, '/');
        break;
      case 'mi':
        result = rounding(miToKm, '*');
        break;
      case 'km':
        result = rounding(miToKm, '/');
        break;
      case 'kg':
        result = rounding(lbsToKg, '/');
        break;
      case 'lbs':
        result = rounding(lbsToKg, '*');
        break;
    }
    
    function rounding(conversion, sign) {
      return Math.round( eval(initNum+sign+conversion) * decimalPlaces)/decimalPlaces;
    };
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
