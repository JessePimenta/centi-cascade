//<script src="http://cdn.rawgit.com/satcy/centiscript/master/js/release/centi.min.0.4.9g.js"></script>
//<canvas id='c'></canvas>

(function(){
window.onload = function(){
   var ct;
   var canvas = document.getElementById('c');
   ct = new Centi('ct');
   ct.init(canvas, getAudioContext());
   ct.setupFunc = init;
   ct.drawFunc = draw;
   ct.beatFunc = beat;
   ct.dspFunc = dsp;
   ct.mouseMove = onMouseMove;
   ct.mouseDown = onMouseDown;
   ct.mouseUp = onMouseUp;
   ct.start();

   requestAnimationFrame(update);

   function init(){
ct.sz(1720,1280);
ct.bg(0)

   }
   function draw(){
// ct.drawMe(0,0,ct.w,ct.h,5,-3,ct.w,ct.h);
ct.hh=(ct.h/3);
ct.num=(700);
ct.cw=(ct.w/(ct.num-1));
ct.col((ct.cos(ct.c*0.01)+1)*107,0,(ct.tan(ct.c*0.011)+1)*17);
// ct.fill();
ct.beginShape();
// ct.crash();
ct.lineTo(0,ct.h);
for(ct.i=0;ct.i<ct.num;ct.i++){
ct.x=(ct.i*ct.cw);
ct.y=((ct.nz(ct.i*0.03,ct.c*0.01)-1)*ct.hh+ct.nz(ct.c*0.05,ct.i*0.3)*ct.hh*0.05);
ct.lineTo(ct.x,ct.y+ct.h-ct.hh);
}
ct.lineTo(ct.w,ct.h);
ct.endShape();
ct.col(255);
ct.strk();
ct.beginShape();
// for(ct.i=0;ct.i<ct.num;ct.i++){
// ct.x=(ct.i*ct.cw);
// ct.y=((ct.nz(ct.i*0.03,ct.c*0.01)-1)*ct.hh+ct.nz(ct.c*0.05,ct.i*0.3)*ct.hh*0.05);
// ct.lineTo(ct.x,ct.y+ct.h+ct.hh);
// }
ct.endShape();
// ct.mouseUp()

   }
   function beat(){

   }
   function dsp(){

   }
   function onMouseMove(e){
     ct.drawMe(0,0,ct.w,ct.h,0,-3,ct.w,ct.h) / 2;
     ct.lineTo(ct.x,ct.y+ct.h-ct.hh);
     ct.crash();


   }
   function onMouseDown(e){
     ct.lineTo(ct.x,ct.y+ct.w-ct.hh);

   }
   function onMouseUp(e){
    //  for(ct.i=0;ct.i<ct.num;ct.i++){
    //  ct.x=(ct.i*ct.cw);
    // ct.lineTo(ct.x,ct.y+ct.w-ct.hh);
    //  ct.y=((ct.nz(ct.i*0.03,ct.c*0.01)-1)*ct.hh+ct.nz(ct.c*0.05,ct.i*0.3)*ct.hh*0.05);
    //  ct.lineTo(ct.x,ct.y+ct.h+ct.hh);
    //  }
   }
   function update(){
       requestAnimationFrame(update);
       ct.update();
   }

   if ( window.addEventListener ) {
       window.addEventListener('resize', onResize, false);
   } else if ( window.onresize ) {
       window.onresize = onResize;
   }

   function onResize(){
       ct.size(ct.sizeW, ct.sizeH);
   }
};
})();
