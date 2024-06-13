import React from 'react'

function SignUP() {
  return (
    <>
    <form action="">
      <input type="text" placeholder="Enter your name" name="name" id="name" required></input>
      <input type="email" placeholder="Enter your email" name="email" id="email" required></input>
      <input type="password" placeholder="Enter your password" name="password" id="password" required></input>
      <input type="password" placeholder="Confirm your password" name="password2" id="password2" required></input>
      <input type="submit" value="Sign Up" className="btn btn-primary"></input>
    </form>
    </>

  )
}

export default SignUP
