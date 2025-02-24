(function () {

   let context;  
   let canvas;
   const PATH = '../../assets/img/';
   var sideImageDisplay = new Image();
   sideImageDisplay.src = 'assets/img/barracanvasgreen.png';

    window.onload = init();
   
    function init() {
        context = document.getElementById('canvas-display');

        if (context !== null) {
            canvas = context.getContext('2d');
            start();
        } else
            alert('Impossible to load canvas');
    };

    function start() {
      grid = new Grid(1900,800,"white");
      sideImageBrand = new CanvasImage(sideImageDisplay.width,sideImageDisplay.height,0,0);
      loop();
    };


    function update() {
        draw();
    }

    function draw() {

        //CLEAR CANVAS DISPLAY
        canvas.fillStyle = 'black';
        canvas.clearRect(0,0,1920,1080);
        
        //DRAW
        grid.render();
        sideImageBrand.render(canvas,sideImageDisplay);
    }

    //RECURSIVE / LOOP 
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, context);
    }

}());