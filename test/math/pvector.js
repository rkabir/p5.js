describe('PVector', function() {
  beforeEach(function() {
    this.sut = new PVector();
  });

  afterEach(function() {
    delete this.sut;
  });

  it('should return a PVector instance', function() {
    expect(this.sut).to.be.an.instanceof(PVector);
  });

  it("should have x, y, z be initialized to 0", function() {
    expect(this.sut.x).to.eql(0);
    expect(this.sut.y).to.eql(0);
    expect(this.sut.z).to.eql(0);
  });

  describe("new PVector(1,2,3)", function() {
    beforeEach(function() {
      this.sut = new PVector(1,2,3);
    });

    it("should have x, y, z be initialized to 1,2,3", function() {
      expect(this.sut.x).to.eql(1);
      expect(this.sut.y).to.eql(2);
      expect(this.sut.z).to.eql(3);
    });
  });

  describe("new PVector(1,2,undefined)", function() {
    beforeEach(function() {
      this.sut = new PVector(1,2,undefined);
    });

    it("should have x, y, z be initialized to 1,2,0", function() {
      expect(this.sut.x).to.eql(1);
      expect(this.sut.y).to.eql(2);
      expect(this.sut.z).to.eql(0);
    });
  });
 describe("set()", function() {
    describe("with PVector", function() {
      it("should have x, y, z be initialized to the vector's x, y, z", function() {
        this.sut.set(new PVector(2,5,6));
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(6);
      });
    });

    describe("with Array", function() {
      it("[2,4] should set x == 2, y == 4, z == 0", function() {
        this.sut.set([2,4]);
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(4);
        expect(this.sut.z).to.eql(0);
      });
      it("should have x, y, z be initialized to the array's 0,1,2 index", function() {
        this.sut.set([2,5,6]);
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(6);
      });
    });

    describe("set(1,2,3)", function() {
      it("should have x, y, z be initialized to the 1, 2, 3", function() {
        this.sut.set(1, 2, 3);
        expect(this.sut.x).to.eql(1);
        expect(this.sut.y).to.eql(2);
        expect(this.sut.z).to.eql(3);
      });
    });
  });


  describe("get()", function() {
    it("should not return the same instance", function() {
      var newObject = this.sut.get();
      expect(newObject).to.not.equal(this.sut);
    });

    it("should return the calling object's x, y, z", function() {
      this.sut.x = 2;
      this.sut.y = 3;
      this.sut.z = 4;
      var newObject = this.sut.get();
      expect(newObject.x).to.eql(2);
      expect(newObject.y).to.eql(3);
      expect(newObject.z).to.eql(4);
    });
  });

  describe("add()", function() {
    beforeEach(function() {
      this.sut.x = 0;
      this.sut.y = 0;
      this.sut.z = 0;
    });
    describe("with PVector", function() {
      it("should add x, y, z  from the vector argument", function() {
        this.sut.add(new PVector(2,5,6));
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(6);
      });
    });

    describe("with Array", function() {
      describe("add([2, 4])", function() {
        it("should add the x and y components", function() {
        this.sut.add([2,4]);
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(4);
        expect(this.sut.z).to.eql(0);
        });
      });

      it("should add the array's 0,1,2 index", function() {
        this.sut.add([2,5,6]);
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(6);
      });
    });

    describe("add(3,5)", function() {
      it("should add the x and y components", function() {
        this.sut.add(3,5);
        expect(this.sut.x).to.eql(3);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(0);
      });
    });

    describe("add(2,3,4)", function() {
      it("should add the x, y, z components", function() {
        this.sut.add(5,5,5);
        expect(this.sut.x).to.eql(5);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(5);
      });
    });

    describe("PVector.add(v1, v2)", function() {
      var v1, v2, res;
      beforeEach(function() {
        v1 = new PVector(2,0,3);
        v2 = new PVector(0,1,3);
        res = PVector.add(v1, v2);
      });

      it("should return neither v1 nor v2", function() {
        expect(res).to.not.eql(v1);
        expect(res).to.not.eql(v2);
      });

      it("should be sum of the two PVectors", function() {
        expect(res.x).to.eql(v1.x + v2.x);
        expect(res.y).to.eql(v1.y + v2.y);
        expect(res.z).to.eql(v1.z + v2.z);
      });
    });

  });


  describe("sub()", function() {
    beforeEach(function() {
      this.sut.x = 0;
      this.sut.y = 0;
      this.sut.z = 0;
    });
    describe("with PVector", function() {
      it("should sub x, y, z  from the vector argument", function() {
        this.sut.sub(new PVector(2,5,6));
        expect(this.sut.x).to.eql(-2);
        expect(this.sut.y).to.eql(-5);
        expect(this.sut.z).to.eql(-6);
      });
    });

    describe("with Array", function() {
      describe("sub([2, 4])", function() {
        it("should sub the x and y components", function() {
        this.sut.sub([2,4]);
        expect(this.sut.x).to.eql(-2);
        expect(this.sut.y).to.eql(-4);
        expect(this.sut.z).to.eql(0);
        });
      });

      it("should substract from the array's 0,1,2 index", function() {
        this.sut.sub([2,5,6]);
        expect(this.sut.x).to.eql(-2);
        expect(this.sut.y).to.eql(-5);
        expect(this.sut.z).to.eql(-6);
      });
    });

    describe("sub(3,5)", function() {
      it("should substract the x and y components", function() {
        this.sut.sub(3,5);
        expect(this.sut.x).to.eql(-3);
        expect(this.sut.y).to.eql(-5);
        expect(this.sut.z).to.eql(0);
      });
    });

    describe("sub(2,3,4)", function() {
      it("should substract the x, y, z components", function() {
        this.sut.sub(5,5,5);
        expect(this.sut.x).to.eql(-5);
        expect(this.sut.y).to.eql(-5);
        expect(this.sut.z).to.eql(-5);
      });
    });

    describe("PVector.sub(v1, v2)", function() {
      var v1, v2, res;
      beforeEach(function() {
        v1 = new PVector(2,0,3);
        v2 = new PVector(0,1,3);
        res = PVector.sub(v1, v2);
      });

      it("should return neither v1 nor v2", function() {
        expect(res).to.not.eql(v1);
        expect(res).to.not.eql(v2);
      });

      it("should be v1 - v2", function() {
        expect(res.x).to.eql(v1.x - v2.x);
        expect(res.y).to.eql(v1.y - v2.y);
        expect(res.z).to.eql(v1.z - v2.z);
      });
    });
  });

  describe("mult()", function() {
    beforeEach(function() {
      this.sut = new PVector();
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });

    it("should return the same object", function() {
      expect(this.sut.mult(1)).to.eql(this.sut);
    });

    describe("with scalar", function() {
      it("multiply the x, y, z with the scalar", function() {
        this.sut.mult(2);
        expect(this.sut.x).to.eql(2);
        expect(this.sut.y).to.eql(2);
        expect(this.sut.z).to.eql(2);
      });
    });

    describe("PVector.mult(v, n)", function() {
      var v;
      beforeEach(function() {
        v = new PVector(1,2,3);
        res = PVector.mult(v, 4);
      });

      it("should return a new PVector", function() {
        expect(res).to.not.eql(v);
      });

      it("should multiply the scalar", function() {
        expect(res.x).to.eql(4);
        expect(res.y).to.eql(8);
        expect(res.z).to.eql(12);
      });
    });


  });

  describe("div()", function() {
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });

    it("should return the same object", function() {
      expect(this.sut.div(0)).to.eql(this.sut);
    });

    describe("with scalar", function() {
      it("divide the x, y, z with the scalar", function() {
        this.sut.div(2);
        expect(this.sut.x).to.be.closeTo(0.5, 0.01);
        expect(this.sut.y).to.be.closeTo(0.5, 0.01);
        expect(this.sut.z).to.be.closeTo(0.5, 0.01);
      });
    });

    describe("PVector.div(v, n)", function() {
      var v, res;
      beforeEach(function() {
        v = new PVector(1,1,1);
        res = PVector.div(v, 4);
      });

      it("should not be undefined", function() {
        expect(res).to.not.eql(undefined);
      });

      it("should return a new PVector", function() {
        expect(res).to.not.eql(v);
      });

      it("should divide the scalar", function() {
        expect(res.x).to.eql(0.25);
        expect(res.y).to.eql(0.25);
        expect(res.z).to.eql(0.25);
      });
    });
  });


  describe("dot", function() {
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });
 
    it("should return a number", function() {
       expect(typeof(this.sut.dot(new PVector())) ===  "number").to.eql(true);
    });


    describe("with PVector", function() {
      it("should be the dot product of the vector", function() {
        expect(this.sut.dot(new PVector(2,2))).to.eql(4);
      });
    });

    describe("with x, y, z", function() {
      it("should be the dot product with x, y", function() {
        expect(this.sut.dot(2,2)).to.eql(4);
      });

      it("should be the dot product with x, y, z", function() {
        expect(this.sut.dot(2,2,2)).to.eql(6);
      });
    });

    describe("PVector.dot(v, n)", function() {
      var v1, v2, res;
      beforeEach(function() {
        v1 = new PVector(1,1,1);
        v2 = new PVector(2,3,4);
        res = PVector.dot(v1, v2);
      });

      it("should return a number", function() {
        expect(typeof(res) ===  "number").to.eql(true);
      });

      it("should be the dot product of the two vectors", function() {
        expect(res).to.eql(9);
      });
    });
  });

  describe("cross", function() {
    var res;
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });
      it("should return a new product", function() {
        expect(this.sut.cross(new PVector())).to.not.eql(this.sut);
      });

    describe("with PVector", function() {
      it("should cross x, y, z  from the vector argument", function() {
        res = this.sut.cross(new PVector(2,5,6));
        expect(res.x).to.eql(1);   //this.y * v.z - this.z * v.y
        expect(res.y).to.eql(-4);  //this.z * v.x - this.x * v.z
        expect(res.z).to.eql(3);   //this.x * v.y - this.y * v.x
      });
    });

    describe("PVector.cross(v1, v2)", function() {
      var v1, v2, res;
      beforeEach(function() {
        v1 = new PVector(3,6,9);
        v2 = new PVector(1,1,1);
        res = PVector.cross(v1, v2);
      });

      it("should not be undefined", function() {
        expect(res).to.not.eql(undefined);
      });

 
      it("should return neither v1 nor v2", function() {
        expect(res).to.not.eql(v1);
        expect(res).to.not.eql(v2);
      });

      it("should the cross product of v1 and v2", function() {
        expect(res.x).to.eql(-3);
        expect(res.y).to.eql(6);
        expect(res.z).to.eql(-3);
      });
    });
  });

  describe("dist", function() {
    var b, c;
    beforeEach(function() {
      this.sut.x = 0;
      this.sut.y = 0;
      this.sut.z = 1;
      b = new PVector(0,0,5);
      c = new PVector(3,4,1);
    });

    it("should return a number", function() {
      expect(typeof(this.sut.dist(b)) ===  "number").to.eql(true);
    });

    it("should return distance between two vectors", function() {
      expect(this.sut.dist(b)).to.eql(4);
    });

    it("should return distance between two vectors", function() {
      expect(this.sut.dist(c)).to.eql(5);
    });

    it("should be commutative", function() {
      expect(b.dist(c)).to.eql(c.dist(b));
    });

  });

  describe("PVector.dist(v1, v2)", function() {
    var v1, v2, res;
    beforeEach(function() {
      v1 = new PVector(0,0,0);
      v2 = new PVector(0,3,4);
    });

    it("should return a number", function() {
      expect(typeof(PVector.dist(v1, v2)) ===  "number").to.eql(true);
    });

    it("should be commutative", function() {
      expect(PVector.dist(v1, v2)).to.eql(PVector.dist(v2, v1));
    });
  });

  describe("normalize", function() {
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });

    it("should return the same object", function() {
      expect(this.sut.normalize()).to.eql(this.sut);
    });

    describe("with unit vector", function() {
      it("should not change the vector", function() {
        this.sut.x = 1;
      this.sut.y = 0;
      this.sut.z = 0;
        this.sut.normalize();
        expect(this.sut.x).to.eql(1);
        expect(this.sut.y).to.eql(0);
        expect(this.sut.z).to.eql(0);
      });
    });

    describe("with 2,2,1", function() {
      it("should normalize to 0.66,0.66,0.33", function() {
        this.sut.x = 2;
      this.sut.y = 2;
      this.sut.z = 1;
        this.sut.normalize();
        expect(this.sut.x).to.be.closeTo(0.6666, 0.01);
        expect(this.sut.y).to.be.closeTo(0.6666, 0.01);
        expect(this.sut.z).to.be.closeTo(0.3333, 0.01);
      });
    });
  });

  describe("limit", function() {
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 1;
      this.sut.z = 1;
    });

    it("should return the same object", function() {
      expect(this.sut.limit()).to.eql(this.sut);
    });

    describe("with a vector larger than the limit", function() {
      it("should limit the vector", function() {
        this.sut.x = 5;
      this.sut.y = 5;
      this.sut.z = 5;
        this.sut.limit(1);
        expect(this.sut.x).to.be.closeTo(0.5773, 0.01);
        expect(this.sut.y).to.be.closeTo(0.5773, 0.01);
        expect(this.sut.z).to.be.closeTo(0.5773, 0.01);
      });
    });

    describe("with a vector smaller than the limit", function() {
      it("should not limit the vector", function() {
        this.sut.x = 5;
      this.sut.y = 5;
      this.sut.z = 5;
        this.sut.limit(8.67);
        expect(this.sut.x).to.eql(5);
        expect(this.sut.y).to.eql(5);
        expect(this.sut.z).to.eql(5);
      });
    });
  });

  describe("setMag", function() {
    beforeEach(function() {
      this.sut.x = 1;
      this.sut.y = 0;
      this.sut.z = 0;
    });

    it("should return the same object", function() {
      expect(this.sut.setMag(2)).to.eql(this.sut);
    });

    it("should set the magnitude of the vector", function() {
      this.sut.setMag(4);
      expect(this.sut.mag()).to.eql(4);
    });

    it("should set the magnitude of the vector", function() {
      this.sut.x = 2;
      this.sut.y = 3;
      this.sut.z = 0;
      this.sut.setMag(2);
      expect(this.sut.mag()).to.eql(2);
      expect(this.sut.x).to.be.closeTo(1.1094, 0.01);
      expect(this.sut.y).to.be.closeTo(1.6641006, 0.01);
    });
  });

  describe("heading", function() {
    it("should return a number", function() {
      expect(typeof(this.sut.heading()) ===  "number").to.eql(true);
    });

    it("heading for vector pointing right is 0", function() {
      this.sut.x = 1;
      this.sut.y = 0;
      this.sut.z = 0;
      expect(this.sut.heading()).to.be.closeTo(0, 0.01);
    });

    it("heading for vector pointing down is PI/2", function() {
      this.sut.x = 0;
      this.sut.y = 1;
      this.sut.z = 0;
      expect(this.sut.heading()).to.be.closeTo(Math.PI/2, 0.01);
    });

    it("heading for vector pointing left is PI", function() {
      this.sut.x = -1;
      this.sut.y = 0;
      this.sut.z = 0;
      expect(this.sut.heading()).to.be.closeTo(Math.PI, 0.01);
    });
  });

  describe("rotate2D", function() {
    it("should return the same object", function() {
      expect(this.sut.rotate2D()).to.eql(this.sut);
    });

    it("should rotate the vector", function() {
      this.sut.x = 1;
      this.sut.y = 0;
      this.sut.z = 0;
      this.sut.rotate2D(Math.PI);
      expect(this.sut.x).to.be.closeTo(-1, 0.01);
      expect(this.sut.y).to.be.closeTo(0, 0.01);
    });

    it("should rotate the vector", function() {
      this.sut.x = 1;
      this.sut.y = 0;
      this.sut.z = 0;
      this.sut.rotate2D(Math.PI/2);
      expect(this.sut.x).to.be.closeTo(0, 0.01);
      expect(this.sut.y).to.be.closeTo(1, 0.01);
    });
  });

  describe("lerp", function() {
    // it("should return the same object", function() {
    //   expect(this.sut.lerp()).to.eql(this.sut);
    // });

    // PEND: ADD BACK IN
    // describe("with PVector", function() {
    //   it("should call lerp with 4 arguments", function() {
    //     spyOn(this.sut, "lerp").andCallThrough();
    //     this.sut.lerp(new PVector(1,2,3), 1);
    //     expect(this.sut.lerp).toHaveBeenCalledWith(1, 2, 3, 1);
    //   });
    // });

    describe("with x, y, z, amt", function() {
      beforeEach(function() {
        this.sut.x = 0;
      this.sut.y = 0;
      this.sut.z = 0;
        this.sut.lerp(2,2,2,0.5);
      });
      it("should lerp x by amt", function() {
        expect(this.sut.x).to.eql(1);
      });

      it("should lerp y by amt", function() {
        expect(this.sut.y).to.eql(1);
      });

      it("should lerp z by amt", function() {
        expect(this.sut.z).to.eql(1);
      });
    });

    describe("with no amt", function() {
      it("should assume 0 amt", function() {
        this.sut.x = 0;
      this.sut.y = 0;
      this.sut.z = 0;
        this.sut.lerp(2,2,2);
        expect(this.sut.x).to.eql(0);
        expect(this.sut.y).to.eql(0);
        expect(this.sut.z).to.eql(0);
      });
    });
  });
  describe("PVector.lerp(v1, v2, amt)", function() {
    var res, v1, v2;
    beforeEach(function() {
      v1 = new PVector(0, 0, 0);
      v2 = new PVector(2, 2, 2);
      res = PVector.lerp(v1, v2, 0.5);
    });
    it("should not be undefined", function() {
      expect(res).to.not.eql(undefined);
    });

    it("should be a PVector", function() {
      expect(res).to.be.an.instanceof(PVector);
    });

    it("should return neither v1 nor v2", function() {
      expect(res).to.not.eql(v1);
      expect(res).to.not.eql(v2);
    });

    it("should res to be [1, 1, 1]", function() {
      expect(res.x).to.eql(1);
      expect(res.y).to.eql(1);
      expect(res.z).to.eql(1);
    });
  });

  describe("PVector.angleBetween(v1, v2)", function() {
    var res, v1, v2;
    beforeEach(function() {
      v1 = new PVector(1, 0, 0);
      v2 = new PVector(2, 2, 0);
      res = PVector.angleBetween(v1, v2);

    });
    it("should be a Number", function() {
      expect(typeof(res)).to.eql('number');
    });
    describe("with [1,0,0] and [2,2,0]", function() {
      it("should be 45 deg differnce", function() {
        v1 = new PVector(1, 0, 0);
        v2 = new PVector(2, 2, 0);
        res = PVector.angleBetween(v1, v2);
        expect(res).to.be.closeTo(Math.PI/4, 0.01);
      });
    });

    describe("with [2,0,0] and [-2,0,0]", function() {
      it("should be 180 deg differnce", function() {
        v1 = new PVector(2, 0, 0);
        v2 = new PVector(-2, 0, 0);
        res = PVector.angleBetween(v1, v2);
        expect(res).to.be.closeTo(Math.PI, 0.01);
      });
    });

    describe("with [2,0,0] and [-2,-2,0]", function() {
      it("should be 135 deg differnce", function() {
        v1 = new PVector(2, 0, 0);
        v2 = new PVector(-2, -2, 0);
        res = PVector.angleBetween(v1, v2);
        expect(res).to.be.closeTo(Math.PI/2 + Math.PI/4, 0.01);
      });

      it("should be commutative", function() {
        v1 = new PVector(2, 0, 0);
        v2 = new PVector(-2, -2, 0);
        res = PVector.angleBetween(v1, v2);
        expect(PVector.angleBetween(v1,v2)).to.be.closeTo(PVector.angleBetween(v2,v1), 0.01);
      });
    });
  });

  describe("array", function() {
    it("should return an array", function() {
      expect(this.sut.array()).to.be.instanceof(Array);
    });

    it("should return an with the x y and z components", function() {
      this.sut.x = 1;
      this.sut.y = 23;
      this.sut.z = 4;
      expect(this.sut.array()).to.eql([1, 23, 4]);
    });
  });

});


