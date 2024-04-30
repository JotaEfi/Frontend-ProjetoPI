import '../../styles/index.css';
import '../../styles/styles.css';
import Navbar from '../components/navbar.js';

function Home() {
  return (
    <div className="home_container">
      {Navbar()}
      <h1>Test1</h1>
    </div>
  );
}
export default Home;
