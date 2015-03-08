float[] pX, pY;
//determine direction of growth
float startRadius = 150;
//when does the sketch end? 
int maxP = 10000;
int pCount = 3000;
//size of brances
float pSize = 10;
//distance between branches
float stickDistance = 1000;
//initial color of branches
color strokeColor = 255;

float rand;


void setup() {
  size(800,600);
  background(20);
  stroke(random(100,255));
  //strokeWeight(2);
  smooth();
  stroke(255);
  pX = new float[maxP];
  pY = new float[maxP];
  pX[0] = 0;
  pY[0] = 0;
}
 
void draw() {
  float arrayDistance;
  float arraySize;
  float maxJumpDistance = width;
  int closestElement = 0;
  translate(width/2,height/2);
  //determine angle of spread of branches in radians
  float theta = random(TWO_PI);
  //differentiate initial growth angle 
  float newElementX=startRadius*cos(theta);
  float newElementY=startRadius*tan(theta);
  // loop until a new point is reached
  while (true) {
    // find the maximum distance from array and the closest element
    for (int i=0; i<pCount; i++) {
      arrayDistance = dist(pX[i],pY[i],newElementX,newElementY);
      if (arrayDistance<maxJumpDistance) {
        maxJumpDistance = arrayDistance;
        closestElement = i;
      }
    }
 
    if (maxJumpDistance<=stickDistance) {
      // determines where to place the point
      theta = atan2(newElementY-pY[closestElement], newElementX-pX[closestElement]);
      pX[pCount] = pX[closestElement] + pSize*cos(theta);
      pY[pCount] = pY[closestElement] + pSize*sin(theta);
      // draw next branch
      line(pX[pCount],pY[pCount],pX[closestElement],pY[closestElement]);
      // new starting radius
      for (int i=0; i<pCount; i++) {
        arraySize = dist(pX[i],pY[i],0,0);
        //adjust the size of the array
        if (arraySize>startRadius) {
          startRadius = arraySize;
        }
      }
      pCount++;
      if (pCount == maxP) {
        noLoop();
      }
      break;
    }
 
    // move p
    theta = random(TWO_PI);
    newElementX+=random(maxJumpDistance)*sin(theta);
    newElementY+=random(maxJumpDistance)*cos(theta);
    if (dist(0,0,newElementX,newElementY)>startRadius*2) {
      newElementX=startRadius*sin(theta);
      newElementY=startRadius*cos(theta);
    }
  }
}


//generate a new one with randomized stroke weight and color
void mousePressed() {
  //float mx = constrain(mouseX, 0, 10);
  //float my = constrain(mouseY, 0, 10);
  //println(mx);
  pCount=1;
  redraw();
  rand = random(.2, 5);
  stroke (random(100,255),random(100,255),random(100,255));
  strokeWeight(random(.2,rand));
}

//clear the screen
void keyPressed() {
  pCount=1;
  background(0);
  redraw();
}


