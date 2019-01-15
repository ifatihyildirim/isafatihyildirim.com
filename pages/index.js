import Header from '../components/Header';
import Left from '../components/Left';
import Right from '../components/Right';
import './styles.scss';

const App = () => (
  <div className="main">
    <Header />
    <div className="main">
      <Left />
      <Right />
    </div>
  </div>
);
export default App;
