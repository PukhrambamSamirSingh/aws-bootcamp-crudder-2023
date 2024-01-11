import { fetchUserAttributes, fetchAuthSession } from "aws-amplify/auth"

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
      setUser({
        display_name: cognito_user.name,
        handle: cognito_user.preferred_username
      })
    })
    .catch((err)=>console.log(err))
  }

export default CheckAuth