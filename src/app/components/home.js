import '../../css/App.css';

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const navigateToMainPage = () => {
      navigate('/main');
    };

    return (
        <div className="home">
            <button onClick={navigateToMainPage} className='home-start-button'>START TAKING NOTES OR TO-DO'S</button>
        </div>
    );
}

export default Home;
