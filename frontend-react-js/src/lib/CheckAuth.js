import { fetchUserAttributes, fetchAuthSession } from "aws-amplify/auth"

async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    console.log('access_token',accessToken)
    console.log('id_token',idToken)
  } catch (err) {
    console.log(err);
  }
}
currentSession()

// ckeck if we are authenticated
const CheckAuth = async (setUser) => {
  const fetchResult=await fetchAuthSession()
  fetchUserAttributes()
  .then(user=>{
      console.log('user', user)
      console.log('authsession',fetchResult);
      return fetchUserAttributes()
    })
    .then((cognito_user)=>{
      console.log('cognito_user',cognito_user);
      setUser({
        display_name: cognito_user.name,
        handle: cognito_user.preferred_username
      })
    })
    .catch((err)=>console.log(err))
  }

export default CheckAuth