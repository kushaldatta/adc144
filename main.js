function preload() { }

function setup() {
    canvas = createCanvas(500, 410);
    canvas.position(450, 175);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 410);
}

function take_snapshot() {
    save("my_filter_image.png");
}