import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";
/* var SimplexNoise = function (r) {
  if (r == undefined) r = Math;
  this.grad3 = [
    [1, 1, 0],
    [-1, 1, 0],
    [1, -1, 0],
    [-1, -1, 0],
    [1, 0, 1],
    [-1, 0, 1],
    [1, 0, -1],
    [-1, 0, -1],
    [0, 1, 1],
    [0, -1, 1],
    [0, 1, -1],
    [0, -1, -1],
  ];
  this.p = [];
  for (var i = 0; i < 256; i++) {
    this.p[i] = Math.floor(r.random() * 256);
  }
  // To remove the need for index wrapping, double the permutation table length
  this.perm = [];
  for (var i = 0; i < 512; i++) {
    this.perm[i] = this.p[i & 255];
  }

  // A lookup table to traverse the simplex around a given point in 4D.
  // Details can be found where this table is used, in the 4D noise method.
  this.simplex = [
    [0, 1, 2, 3],
    [0, 1, 3, 2],
    [0, 0, 0, 0],
    [0, 2, 3, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 2, 3, 0],
    [0, 2, 1, 3],
    [0, 0, 0, 0],
    [0, 3, 1, 2],
    [0, 3, 2, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 3, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 2, 0, 3],
    [0, 0, 0, 0],
    [1, 3, 0, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [2, 3, 0, 1],
    [2, 3, 1, 0],
    [1, 0, 2, 3],
    [1, 0, 3, 2],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [2, 0, 3, 1],
    [0, 0, 0, 0],
    [2, 1, 3, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [2, 0, 1, 3],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [3, 0, 1, 2],
    [3, 0, 2, 1],
    [0, 0, 0, 0],
    [3, 1, 2, 0],
    [2, 1, 0, 3],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [3, 1, 0, 2],
    [0, 0, 0, 0],
    [3, 2, 0, 1],
    [3, 2, 1, 0],
  ];
};

SimplexNoise.prototype.dot = function (g, x, y) {
  return g[0] * x + g[1] * y;
};
SimplexNoise.prototype.noise = function (xin, yin) {
  var n0, n1, n2; // Noise contributions from the three corners
  // Skew the input space to determine which simplex cell we're in
  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var s = (xin + yin) * F2; // Hairy factor for 2D
  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var t = (i + j) * G2;
  var X0 = i - t; // Unskew the cell origin back to (x,y) space
  var Y0 = j - t;
  var x0 = xin - X0; // The x,y distances from the cell origin
  var y0 = yin - Y0;
  // For the 2D case, the simplex shape is an equilateral triangle.
  // Determine which simplex we are in.
  var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
  if (x0 > y0) {
    i1 = 1;
    j1 = 0;
  } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
  else {
    i1 = 0;
    j1 = 1;
  } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
  // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
  // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
  // c = (3-sqrt(3))/6
  var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
  var y2 = y0 - 1.0 + 2.0 * G2;
  // Work out the hashed gradient indices of the three simplex corners
  console.log(i);
  var ii = i & 255;
  console.log(ii);
  var jj = j & 255;
  console.log(jj);
  console.log(jj);
  var gi0 = this.perm[ii + this.perm[jj]] % 12;
  var gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
  var gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
  // Calculate the contribution from the three corners
  var t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0); // (x,y) of grad3 used for 2D gradient
  }
  var t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
  }
  var t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
  }
  // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].
  return 70.0 * (n0 + n1 + n2);
}; */

function formatPoints(points, close) {
  points = [...points];
  // so that coords can be passed as objects or arrays
  if (!Array.isArray(points[0])) {
    points = points.map(({ x, y }) => [x, y]);
  }

  if (close) {
    const lastPoint = points[points.length - 1];
    const secondToLastPoint = points[points.length - 2];

    const firstPoint = points[0];
    const secondPoint = points[1];

    points.unshift(lastPoint);
    points.unshift(secondToLastPoint);

    points.push(firstPoint);
    points.push(secondPoint);
  }

  return points.flat();
}

function spline(points = [], tension = 1, close = false, cb) {
  points = formatPoints(points, close);

  const size = points.length;
  const last = size - 4;

  const startPointX = close ? points[2] : points[0];
  const startPointY = close ? points[3] : points[1];

  let path = "M" + [startPointX, startPointY];

  cb && cb("MOVE", [startPointX, startPointY]);

  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? points[i - 2] : points[0];
    const y0 = i ? points[i - 1] : points[1];

    const x1 = points[i + 0];
    const y1 = points[i + 1];

    const x2 = points[i + 2];
    const y2 = points[i + 3];

    const x3 = i !== last ? points[i + 4] : x2;
    const y3 = i !== last ? points[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];

    cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }

  return path;
}

function createPoints(offsetX, offsetY) {
  const points = [];
  // how many points do we need
  const numPoints = 15;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 75;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    /* const randOffset = Math.random(); */
    const x = 100 + Math.cos(theta) * rad /* + 20 * randOffset */ - offsetX;
    const y = 100 + Math.sin(theta) * rad /* - 20 * randOffset */ + offsetY;

    // store the point
    points.push({
      x: x,
      y: y,
      /* we need to keep a reference to the point's original {x, y} coordinates 
      for when we modulate the values later */
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }

  return points;
}

// map a number from 1 range to another
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// our <path> element
const path1 = document.querySelector(".path1");
const path2 = document.querySelector(".path2");
const path3 = document.querySelector(".path3");
const path4 = document.querySelector(".path4");
const path5 = document.querySelector(".path5");
// used to set our custom property values
const root = document.documentElement;

const points1 = createPoints(-7, -5);
const points2 = createPoints(-4, 0);
const points3 = createPoints(2, 4);
const points4 = createPoints(3, 5);
const points5 = createPoints(7, 7);

const simplex = new SimplexNoise();

// how fast we progress through "time"
let initialNoiseStep = 0.005;
var noiseStep = initialNoiseStep;

function noise(x, y) {
  // return a value at {x point in time} {y point in time}
  return simplex.noise2D(x, y);
}

let timeStep = 1;

(function animate() {
  // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
  path1.setAttribute("d", spline(points1, 0.2, true));
  path2.setAttribute("d", spline(points2, 0.2, true));
  path3.setAttribute("d", spline(points3, 0.2, true));
  path4.setAttribute("d", spline(points4, 0.4, true));
  path5.setAttribute("d", spline(points5, 0.4, true));

  requestAnimationFrame(animate);
  // for every point...
  for (let i = 0; i < points1.length; i++) {
    const point1 = points1[i];
    const point2 = points2[i];
    const point3 = points3[i];
    const point4 = points4[i];
    const point5 = points5[i];

    // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
    const nX1 = noise(point1.noiseOffsetX, point1.noiseOffsetX);
    const nY1 = noise(point1.noiseOffsetY, point1.noiseOffsetY);

    // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
    const x1 = map(nX1, -1, 1, point1.originX - 20, point1.originX + 20);
    const y1 = map(nY1, -1, 1, point1.originY - 20, point1.originY + 20);

    const x2 = map(nX1, -1, 1, point2.originX - 20, point2.originX + 20);
    const y2 = map(nY1, -1, 1, point2.originY - 20, point2.originY + 20);

    const x3 = map(nX1, -1, 1, point3.originX - 20, point3.originX + 20);
    const y3 = map(nY1, -1, 1, point3.originY - 20, point3.originY + 20);

    const x4 = map(nX1, -1, 1, point4.originX - 20, point4.originX + 20);
    const y4 = map(nY1, -1, 1, point4.originY - 20, point4.originY + 20);

    const x5 = map(nX1, -1, 1, point5.originX - 20, point5.originX + 20);
    const y5 = map(nY1, -1, 1, point5.originY - 20, point5.originY + 20);

    // update the point's current coordinates
    point1.x = x1;
    point1.y = y1;

    point2.x = x2;
    point2.y = y2;

    point3.x = x3;
    point3.y = y3;

    point4.x = x4;
    point4.y = y4;

    point5.x = x5;
    point5.y = y5;

    // progress the point's x, y values through "time"
    point1.noiseOffsetX += noiseStep;
    point1.noiseOffsetY += noiseStep;

    point2.noiseOffsetX += noiseStep;
    point2.noiseOffsetY += noiseStep;

    point3.noiseOffsetX += noiseStep;
    point3.noiseOffsetY += noiseStep;

    point4.noiseOffsetX += noiseStep;
    point4.noiseOffsetY += noiseStep;

    point5.noiseOffsetX += noiseStep;
    point5.noiseOffsetY += noiseStep;
  }

  /* Stop for 0.2 seconds every 100 steps */

  let wavelength = 80;
  if (timeStep % (2 * wavelength) < wavelength) {
    noiseStep =
      (Math.sin((timeStep / (wavelength / 4)) * Math.PI) + 1) *
      initialNoiseStep;
  } else {
    noiseStep =
      (Math.sin((timeStep / (wavelength / 2)) * Math.PI) + 1) *
      initialNoiseStep;
  }
  timeStep = timeStep + 1;
})();
