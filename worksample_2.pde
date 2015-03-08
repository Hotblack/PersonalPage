final int maxIteration = 20;
final float upperLeftX = -2.5;
final float upperLeftY = 2.5;
final float viewWidth = 5.0;
PFont f;
 
void setup() {
  size(700, 700);
  drawJuliaSet(-1, 0);
  //f = loadFont("Monospaced-24.vlw");

}
 
// Empty but has to be here because Processing is weird
void draw() {
}
 
 
// Draws the Julia Set 
void drawJuliaSet(float ca, float cb) {
   
  float escapeValue = max(dist(ca, cb, 0, 0), 2.0);
 
  for (float row = 0; row <= height; row++)
    for (float col = 0; col <= width; col++) {
 
      int iterations = 0;
 
      float a = getReal(col);
      float b = getImaginary(row);
 
      while (dist(a,b, 0,0) < escapeValue && iterations < maxIteration) {
        float newA = a*a - b*b + ca;
        float newB = 2*a*b + cb;
        a = newA;
        b = newB;
        iterations++;
      }
 
      if (dist(a,b, 0,0) < escapeValue) // didn't escape
        stroke(255);
      else
        stroke(1.0*iterations/maxIteration * 255);
 
      point(col, row);
    }
}
 
// If the mouse is pressed, draw the set
void mousePressed() {
  drawJuliaSet(getReal(mouseX), getImaginary(mouseY));

}
 
// Compute the component for a given x coordinate on
// the grid, which will be scaled by the window size.
float getReal(float x) {
  return upperLeftX + 1.0 * x / width * viewWidth;
}
 
// Compute the component for a y coordinate on
// the grid, which will be scaled by the window size.
float getImaginary(float y) {
  return upperLeftY - 1.0 * y / height * viewWidth;
}
 


