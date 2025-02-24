(function () {

   let context;  
   let canvas;
   let grid;  

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
      grid.render();
      sideImageBrand.render(canvas,sideImage);
      loop();
    };

    //CANVAS UPDATE
    function update() {
        draw();
    }

    //CANVAS DRAW
    function draw() {

        //CLEAR CANVAS DISPLAY
        canvas.fillStyle = 'black';
        canvas.clearRect(0,0,1920,1080);
        
        grid.render();
        sideImageBrand.render(canvas,sideImage);
    }

    //RECURSIVE / LOOP 
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, context);
    }

}());