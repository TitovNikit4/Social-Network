import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://mpng.subpng.com/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://thumbs.dreamstime.com/b/d-mural-wallpaper-beautiful-view-landscape-background-old-arches-tree-sun-water-birds-flowers-transparent-curtains-166191190.jpg' />
        </div>
        <div>
          ava + decription
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Hey Post 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
