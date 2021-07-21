import createBoard from '../reducers/createBoard';

describe('createBoard reducer Test', () => {
    it('should return the property of the box with given object', () => {
     const currentCountProps = {
          gameState: {
            squares: [{"color": "red",
                "_color": "orange",
                "height": 80,
                "position": 0,
                "width": 80,
                "x": 0,
                "y": 0}]
          }
        };
       expect(createBoard(currentCountProps)).toHaveProperty('gameState');

       expect(createBoard()).toHaveProperty('gameState');
    });

    it('should return the default object property of the box', () => {
       expect(createBoard()).toHaveProperty('gameState');
    });

});
