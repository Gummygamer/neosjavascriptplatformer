var x = 0;
var y = 5;
var z = 0;

dy = 0;
ddy = 0;
dx = 0;

function updateCoord() {
  dy = dy + ddy;
  y = y + dy;
  x = x + dx;
  
  dx = dx / 2;
  
  if (y <= 0) {
     dy = 0;
	 y = 0;
	 ddy = 0;
  }
  
  if(y > 0){
     ddy = -0.00001
  }
}

function getCoord() {
  var coordstr = "[" + x.toString() + ";" + y.toString() + ";" + z.toString() + "]";
  updateCoord();
  return coordstr;
}

exports.fetchCoord = function () {
  return getCoord();
};

exports.moveRight = function() {
  dx = dx + 0.001;

  return getCoord();
}

exports.moveLeft = function() {
  dx = dx - 0.001;

  return getCoord();
}

exports.jump = function() {
  if(y==0)
  {
      dy = dy + 0.01;
  }

  return getCoord();
}

