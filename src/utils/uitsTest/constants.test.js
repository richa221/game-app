import {numRows, numColumns, gameWidth, gameHeight}  from '../constants';
describe('App Constants Tests', () => {
    const testRows = 10;
    const testColumns = 10;
    const testWidth = 800;
    const testHeight = 800;
  
    it('should return true with given number of rows', () => {          
          expect(numRows).toEqual(testRows);    
    });
  
    it('should return false with given number of rows', () => {  
        expect(2).not.toEqual(testRows);   
    });
  
    it('should return true with given number of coloumns', () => {  
           expect(numColumns).toEqual(testColumns); 
    });
  
    it('should return false with given number of coloumns', () => {  
      expect(4).not.toEqual(testColumns); 
    });
  
     it('should return true with given  gameWidth', () => {  
           expect(gameWidth).toEqual(testWidth); 
    });
  
    it('should return false with given gameWidth', () => {  
      expect(200).not.toEqual(testWidth); 
    });
    it('should return true with given  gameHeight', () => {  
      expect(gameHeight).toEqual(testHeight); 
  });
  
  it('should return false with given gameHeight', () => {  
  expect(200).not.toEqual(testHeight); 
  });
  
       
  });