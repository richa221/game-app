import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Canvas from '../components/canvas';
configure({ adapter: new Adapter() })

describe('Canvas Component Test', () => {
  it('should have Squares component', () => {
    const component = shallow(<Canvas />);  
    
    component.find('#color-game-app').text()
    expect(component.find('#color-game-app').text()).toContain('Squares');            
  });

  it('should have border on Squares component', () => {
    const component = shallow(<Canvas />);      
    component.find('#color-game-app').text()
    expect(component.find('#color-game-app').text()).toContain('Border');            
  });
});





