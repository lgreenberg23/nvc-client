
export function login(userParams, history) {
   const userJSON = JSON.stringify(userParams)
   const getLogin = {
      method: 'post',
      body: userJSON,
      headers: {
         "Content-Type":"application/json",
         "Accept":"application/json"
      }
   }
   //before you dispatch below you can check for the token
  return(dispatch) => {
    return fetch('https://git.heroku.com/timebank-backend.git/api/v1/login', getLogin)
    .then(res => res.json())
    .then(user => { 
      if (user.user){
        dispatch(
          {type: 'LOGIN',
            payload: user} //user contains user-> user.id, and jwt ->jwt token
          )
      }else{alert('Login failed')}

        }
      )
    // .then(res => history.push("/in/home"))
   }
}

export function signUp(userParams, history) {
  const userJSON = JSON.stringify(userParams)
  const getSignUp = {
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
   }
  return(dispatch) => {
      fetch('https://git.heroku.com/timebank-backend.git/api/v1/users', getSignUp)
      .then(res => res.json())
      .then(user => {
        if (user.user){
        dispatch(
           {type: 'LOGIN',
            payload: user}
         )
      }else{alert('Sign-Up Failed')}
      })
      .then(res => history.push("/home"))
   }
}




export function logout() {
   return {type: "LOG_OUT"}
}


export function authenticate()
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);


export function letMeIn(callback) {
   const jwtToken = localStorage.getItem("token")
   console.log("jwt token", jwtToken)
   const myInfo = {
      headers:{
         "Authorization":`Bearer ${jwtToken}`,
         "Accept":"application/json"
      }
   }
   return(dispatch) => { 
      fetch('https://git.heroku.com/timebank-backend.git/api/v1/me', myInfo)
      .then(res => res.json()) 
      .then(user => {
         callback(user.id)
         dispatch(
            {type: 'LET_ME_IN',
             payload: user}
            )
         }
      )
   }
}