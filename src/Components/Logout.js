import React from 'react'


class Logout extends React.Component{

	render(){
		return(
			<div>
				<a href="#" onclick="signOut();">Sign out</a>
				<script>
				  function signOut() {
				    var auth2 = gapi.auth2.getAuthInstance();
				    auth2.signOut().then(function () {
				      console.log('User signed out.');
				    });
				  }
				</script>
			</div>
		)
	}
}

export default Logout




