import '../../css/App.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/');
  };

  const navigateToNotes = () => {
    navigate('/note');
  };

  const navigateToMainPage = () => {
    navigate('/main');
  };

  return (
    <div className='container'>
      <div className="Sidebar">
        <ul className="sidebar">
          <li onClick={navigateToMainPage}><span>Esnodia</span></li>
          <hr className="title-element-hr"></hr>
          <li onClick={navigateToHomePage}><span><i className="fa fa-home"></i></span><span><img className='arrow-image' alt="Home" src='/arrow.png'></img></span></li>
          <li onClick={navigateToNotes}><span><i className="fa fa-dashboard"></i></span><span>Other Notes</span></li>             
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
