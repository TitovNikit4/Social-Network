import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
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
        <div className='posts'>
          <div className={s.item}> 
            Post 1
          </div>
          <div className={s.item}>
            Hey Post 1
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
