import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@2.4.0";

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
