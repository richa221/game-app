import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentCount from '../components/currentCount';

configure({ adapter: new Adapter() })

describe('CurrentCount Component Tests', () => {
  it('should be start new game', () => {
  	const currentCountProps = {
	    gameState: {
	      currentCount: 2	     
	    }
	  }
    const component = shallow(<CurrentCount  {...currentCountProps} />);    
    expect(component.find('#currentCount').text()).toEqual('2');    
  });
});
