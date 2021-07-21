import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewGame from '../components/newGame';
configure({ adapter: new Adapter() });

describe('newGameStart: This should call create board function', () => {
  it('should be start new game', () => {    
    const newGameProps = {
    createBoard: jest.fn()
    };    
    const component = shallow(<NewGame {...newGameProps} />);
    expect(newGameProps.createBoard).not.toHaveBeenCalled();
    component.find("button").simulate("mouseup");
    expect(newGameProps.createBoard).toHaveBeenCalledTimes(1);
  });

});