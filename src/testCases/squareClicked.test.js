import squareClicked from '../reducers/squareClicked';

describe('squarClicked reducer Tests', () => {
    it('should return the property of the box with given object', () => {
     const squarClickedProps = {
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
       expect(squareClicked(squarClickedProps)).toHaveProperty('gameState');
    });
});