import React, { Component } from 'react';

class About extends Component {
render() {

if(this.props.data){
var name = this.props.data.name;
var profilepic= "images/"+this.props.data.image;
var bio = this.props.data.bio;
var city = this.props.data.address.city;
var state = this.props.data.address.state;
var zip = this.props.data.address.zip;
var phone= this.props.data.phone;
var email = this.props.data.email;
var blog = this.props.data.blog;
var resumeDownload = this.props.data.resumedownload;
}

return (
<section id="about">
<div className="row">
   <div className="three columns">
      <img className="profile-pic"  src={profilepic} alt="Anastasia's Orlova Profile Pic" />
   </div>
   <div className="nine columns main-col">
      <h2>About Me</h2>

      <p>{bio}
      <br/>
      <a href={blog}>Please check my blog!</a></p>
      <div className="row">
         <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
               <span>{name}</span><br />
                     {city} {state}, {zip}
               <br />
               <span>{phone}</span><br />
               <span><a href="mailto:anastasia.orlova1612@gmail.com">{email}</a></span><br />
            </p>
         </div>
         <div className="columns download">
            <p>
               <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
            </p>
         </div>
      </div>
   </div>
</div>

</section>
);
}
}

export default About;
