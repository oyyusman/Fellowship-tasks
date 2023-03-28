function calculateAreaOfCircle(radius) {
    const PI = 3.14159; 
    let diameter = radius * 2; 
    var circumference;
    if (radius > 0) {
      circumference = diameter * PI;
    } else {
      circumference = 0; 
    }
    return PI * radius * radius;
  }

  console.log('The area of circle is:'+calculateAreaOfCircle(3));
  