import * as actions from '../actions/index';

describe('App actions Tests', () => {
    it('returns type CREATEBOARD', function () {
      const action = actions.createBoard();      
      expect("CREATE_BOARD").toEqual(action.type)
    });
    it('returns type not CREATEBOARD', function () {
      const action = actions.createBoard();      
      expect("CREATE").not.toEqual(action.type)
    });
    it('returns type SQURECLICKED with payload', function () {
        const position=3;
        const action = actions.squareClicked(position);
        expect('SQUARE_CLICKED').toEqual(action.type);
      });
      it('returns type not SQURECLICKED with payload', function () {
        const position=2;
        const action = actions.squareClicked(position);
        expect("SQUARE_CLICK").not.toEqual(action.type);
      });
  
});