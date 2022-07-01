function setup()
{
    canvas= createCanvas(600, 500);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function play()
{
   song.play();
   song.setVolume(1);
   song.rate(1);

}

function preload()
{
    song= loadSound("music.mp3");
}

function modelLoaded()
{
    console.log("poseNet is initialised");
}

function draw()
{
    Image(video, 0, 0, 600, 500);
    fill("peach");
    stroke("white");
}