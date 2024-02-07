import './ProfileHeading.css';
import EditProfileButton from './EditProfileButton';

export default function ProfileHeading(props) {
    const backgroundImage = 'url("https://assets.crudder.in/banners/banner.jpg")'
    const styles = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

  return (
    <div className='activity_feed_heading profile_heading'>
        {/*
            <div className='title'>{props.profile.display_name}</div>
            <div className='cruds_count'>
                {props.profile.cruds_count} Cruds
            </div>
        */}
         <div className='banner' style={styles}>
            <div className='avatar'>
                <img src="https://assets.crudder.in/avatars/data.jpg" alt=""/>
            </div>
        </div>
        <div className='info'>
            <div className='id'>
                {/* 
                    <div className='display_name'>{props.display_name}</div>
                    <div className='handle'>@{props.handle}</div>
                    <EditProfileButton setPopped={props.setPopped} />
                */}
            </div>
        </div>
    </div>
  );
}