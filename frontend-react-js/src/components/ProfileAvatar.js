import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
    const styles = {
        backgroundImage: `url("https://assets.crudder.in/avatars/${props.id})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className='profile-avatar' style={styles}></div>
    );
}