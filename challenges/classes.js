// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(properties){
//     this.length = properties.length;
//     this.width = properties.width;
//     this.height = properties.height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }

class CuboidMakerNew{
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height; 
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

  const cuboidNew = new CuboidMakerNew({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidNew.volume()); // 100
console.log(cuboidNew.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(properties){
        super(properties);
    }

    cubeVolume(){
        return this.length * this.width * this.height;
    }

    cubeSurfaceArea(){
        return 6 * (this.length * this.length);
    }
}

const cube = new CubeMaker({
    length: 7,
    width: 7,
    height: 7,
});

console.log(cube.cubeVolume()); // 343
console.log(cube.cubeSurfaceArea()); // 294