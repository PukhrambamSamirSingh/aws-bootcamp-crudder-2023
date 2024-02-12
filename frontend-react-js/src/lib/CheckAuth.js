import { fetchUserAttributes, fetchAuthSession } from "aws-amplify/auth"

export async function getAccessToken(){
  fetchAuthSession()
  .then((cognito_user_session) => {
    console.log('cognito_user_session', cognito_user_session);
  })
  .catch((err) => console.log(err));
}
// ckeck if we are authenticated
const CheckAuth = async (setUser) => {
  fetchUserAttributes()
  .then(user=>{
      console.log('user', user)
      return fetchUserAttributes()
  })
  .then((cognito_user)=>{
    console.log('cognito_user',cognito_user);
    setUser({
      cognito_user_uuid:cognito_user.sub,
      display_name: cognito_user.name,
      handle: cognito_user.preferred_username
    })
  })
  .catch((err)=>console.log(err))
  }

export default CheckAuth