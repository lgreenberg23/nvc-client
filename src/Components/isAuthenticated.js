
//HOC
import React from 'react'

import { Redirect } from 'react-router-dom'

function authenticated(WrappedComponent){
  return function (props) {
		if (props.location.pathname === '/login' || props.location.pathname === '/register'){	
			return null     
		}else{
			if (!localStorage.getItem('token')) {
	        return <Redirect to='/login' />
	      }
	   	return <WrappedComponent {...props} />
	   }
	}
}

export default authenticated