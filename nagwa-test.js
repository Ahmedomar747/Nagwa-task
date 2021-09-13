$(document).ready(function() {

    var launched = false;
    var radius = 0;
    var angle = $('#angle').val();
    var velocity = $('#velocity').val();


    let canvas = document.getElementById("canvas");
    canvas.width = $(".view").width();
    canvas.height = $(".view").height();
    let ctx = canvas.getContext("2d");


    function draw() {
        let xCoord = radius * Math.sin(Math.PI * 2 * angle / 360);
        let yCoord = radius * Math.cos(Math.PI * 2 * angle / 360);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(xCoord + canvas.width / 2, yCoord + canvas.height / 2, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }

    draw();

    $('.angle-text').text($('#angle').val());
    $('#angle').change(() => {
        $('.angle-text').text($('#angle').val());
        angle = Number($('#angle').val());
    });
    $('.velocity-text').text($('#velocity').val());
    $('#velocity').change(() => {
        $('.velocity-text').text($('#velocity').val());
        velocity = Number($('#velocity').val());
    });



    $('.launchResetBtn').click((e) => {
        e.preventDefault();
        let interval;
        console.log($(interval));
        if (!launched) {
            launched = true;
            interval = setInterval(function() {
                    radius += 1;
                    draw();
                },
                1000 / velocity);
            console.log($(interval));
            $('.launchResetBtn span').text("Reset");
        } else if (interval) {
            launched = false;
            console.log($(interval));
            clearInterval(interval);
            $('.launchResetBtn span').text("Launch");
            draw();
        }
    });
});