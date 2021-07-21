import {updateSquares, posToXY, xyToPos}  from '../formulas';
describe('Utility Update Squares Color Tests', () => {
    it('should return box color', () => {  
      const squares = [{"color": "red",
                "color": "orange",
                "height": 80,
                "position": 0,
                "width": 80,
                "x": 0,
                "y": 0}]
          ;               
          expect(updateSquares(squares, 0, "orange", "orange").length).toBe(1);
          expect(updateSquares([], 0, "orange", "orange").length).toBe(0)       
    });
    it('should not return box color', () => {        
          expect(updateSquares([], 0, "orange", "orange").length).toBe(0)       
    });  

    it('should return box color', () => {  
      const squares = [{"color": "red",
                "color": "orange",
                "height": 80,
                "position": 0,
                "width": 80,
                "x": 0,
                "y": 0}]
          ;               
          expect(updateSquares(squares, 0, "orange", "orange").length).toBe(1);
          expect(updateSquares([], 0, "orange", "orange").length).toBe(0)       
    });
    it('should not return box color', () => {        
          expect(updateSquares([], 0, "orange", "orange").length).toBe(0)       
    });  

});
//
describe('Utility Check Squares Position Tests', () => {
  it('should return Box position', () => {  
    const pos = {
      "x":2,
      "y":3
    }  
    const n=4;
    expect(posToXY(pos));
     console.log(posToXY(n));       
  });
  // it('should not return box color', () => {        
  //       expect(updateSquares([], 0, "orange", "orange").length).toBe(0)       
  // });  
});

//