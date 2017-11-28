
export function getUser(id) {
	return(dispatch) => {
	  
    fetch(`https://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json())
      .then(user => {
        dispatch(
        {type: 'GET_USER',
         payload: user}
        )
      }
    )
  }
}