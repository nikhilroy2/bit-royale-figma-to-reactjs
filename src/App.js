import Base from './jsx/layout/Base';
import './sass/global/global.css';
import Homepage from './jsx/pages/homepage/Homepage';
function App() {
  return (
    <div className="App">
      <Base>
        <Homepage></Homepage>
      </Base>
    </div>
  );
}

export default App;


