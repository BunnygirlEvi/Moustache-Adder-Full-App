noseX = 0;
noseY = 0;

function preload() {
  moustache = loadImage(
    "https://i.postimg.cc/NMzCr7nj/moustache-removebg-preview.png"
  );
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    noseX = results[0].pose.nose.x - 40;
    noseY = results[0].pose.nose.y;
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 9, 0, 300, 300);
  image(moustache, noseX, noseY, 100, 30);
}

function take_snapshot() {

  save("myFilterImage.png");
}
