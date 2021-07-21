import Game from '../containers/game'
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16'
import { shallow,configure } from 'enzyme'
configure({ adapter: new Adapter() })

describe('Game snapshot tests', () => {
    const mockStore = configureStore();
   
    it('renders correctly', () => {  
     const tree = shallow(<Provider store={mockStore({})}><Game /></Provider>)
     expect(tree).toMatchSnapshot();
    })
   });