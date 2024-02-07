import './UserFeedPage.css';
import React from "react";
import { useParams } from 'react-router-dom';

import DesktopNavigation  from '../components/DesktopNavigation';
import DesktopSidebar     from '../components/DesktopSidebar';
import ActivityFeed from '../components/ActivityFeed';
import ActivityForm from '../components/ActivityForm';
<<<<<<< HEAD
import EditProfileButton from '../components/EditProfileButton'

// [TODO] Authenication
import Cookies from 'js-cookie'
=======
import CheckAuth from '../lib/CheckAuth';
import ProfileHeading from '../components/ProfileHeading';
>>>>>>> fcf33f5 (implementing the frontend.)

export default function UserFeedPage() {
  const [activities, setActivities] = React.useState([]);
  const [profile, setProfile] = React.useState([]);
  const [popped, setPopped] = React.useState([]);
  const [poppedProfile, setPoppedProfile] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const dataFetchedRef = React.useRef(false);

  const params = useParams();

  const loadData = async () => {
    try {
      const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/@${params.handle}`
      const res = await fetch(backend_url, {
        method: "GET"
      });
      let resJson = await res.json();
      if (res.status === 200) {
<<<<<<< HEAD
        setActivities(resJson.profile)
=======
        setProfile(resJson.profile)
>>>>>>> fcf33f5 (implementing the frontend.)
        setActivities(resJson.activities)
      } else {
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(()=>{
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    loadData();
    CheckAuth(setUser);
  }, [])

  return (
    <article>
      <DesktopNavigation user={user} active={'profile'} setPopped={setPopped} />
      <div className='content'>
        <ActivityForm popped={popped} setActivities={setActivities} />
        <div className='activity_feed'>
<<<<<<< HEAD
          <div className='activity_feed_heading'>
            <div className='title'>{title}</div>
          </div>
=======
          <ProfileHeading setPoppedProfile={setPoppedProfile} profile={profile}/>
          {/*
          <div className='activity_feed_heading'>
            <ProfileHeading profile={profile}/>
          </div>
          */}
>>>>>>> fcf33f5 (implementing the frontend.)
          <ActivityFeed activities={activities} />
        </div>
      </div>
      <DesktopSidebar user={user} />
    </article>
  );
}