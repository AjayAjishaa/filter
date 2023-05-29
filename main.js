musX = 0;
musY = 0;
function preLoad()
{
    mustache = loadImage('https://i.postimg.cc/sXWxd2qk/ajayajish-mustache.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        musX = results[0].pose.nose.x-16;
        musY = results[0].pose.nose.y-16;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, musX, musY, 30, 30);
}

function take_snapshot()
{
    save("myFilterImage.png")
}