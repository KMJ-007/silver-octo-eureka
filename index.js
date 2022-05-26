// const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
// const density ='         .:░▒▓█'
const density = "       .:-i|=+%O#@";

let video;
let asciiDiv;
console.log("hello karan");
function setup() {
  noCanvas();
  // for captiring video
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      // you need to know how pixel works and there this is multiplied by 4 because every pixel has 4 values, r,g,b,alpha
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      //deciding the index of char to use from density string on the basis of avg value of pixel's r,g,b
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      //if density string has space then it should be replaced by non breaking space, so photo dont get distorted
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
