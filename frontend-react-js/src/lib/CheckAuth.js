import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth"

// ckeck if we are authenticated
const CheckAuth = async ({user,setUser}) => {
    fetchUserAttributes()
    .then(data=>{
      console.log('user', user)
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