// function Triangle(a,b){
//   this.a = a;
//   this.b = b;
// }

// //on a seperate line write your prototypes
// Triangle.prototypes.getArea = function(){
//   return this.a * this.b / 2;
// };

// Triangle.prototypes.getHypotenuse = function(){
//   return Math.sqrt(this.a**2 + this.b**2);
// };


class Triangle {

  constructor(a,b,c){
    for(let side of [a,b,c]){
      if(!Number.isFinite(side) || side <= 0){
        throw new Error ("Sides must be a postive numbers")
      }
    }

    this.a = a;
    this.b = b;
    this.c = c;

  }

  // this is a method call greet

  greet(){
    console.log("Hello from triangle!!!");
  };

// this is a method called display

  display(){
    return `Triangle with sides of ${this.a} and ${this.b}`;
  };

  //this is a method called getArea

  getArea(){
    const{a,b,c} = this;
    const s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  isBig(){
    //make sure to refer 'this.'
    return this.getArea() > 49;
  }
}

// const t1 = new Triangle(3,4,5);
// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

class RightTriangle extends Triangle{

  constructor(a,b,c){
    if (a * a + b * b !=== c * c){
      throw new Error("Invalid hypotenuse for right triangle")
    }
    super(a,b,c);
    this.hypot = c;
  }
  isRightTriangle(){
    return true;
  }
  display(){
    return 'Right ' + super.display();
  };
}
