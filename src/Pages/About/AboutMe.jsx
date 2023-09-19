import React from 'react'
import UserProfile from './UserProfile';
import PersonalInfo from './PersonalInfo';
import Movies from './MyLike/Movies';

function AboutMe() {
  return (
    <div>
        <UserProfile></UserProfile>
        <PersonalInfo></PersonalInfo>
        <Movies></Movies>
    </div>
  )
}

export default AboutMe;