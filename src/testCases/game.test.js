import App from '../App';
import Adapter from 'enzyme-adapter-react-16'
import { configure,shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
const mockCallBack = jest.fn(); 
configure({ adapter: new Adapter() })

const gameContainerElement = shallow((<Provider store={store}><App /></Provider>));

describe('Game container snapshot testing',()=>{
  it('renders app module correctly',()=>{
      expect(gameContainerElement).toMatchSnapshot();
  });
});
