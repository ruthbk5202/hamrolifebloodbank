
import React from "react";
import "./team.css"; // Import the CSS file

const teamMembers = [
  {
    id: 1,
    name: "Drisya Giri",
    image: "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/LJvr0WJslH.jpg",
    description: "Director",
  },
  {
    id: 2,
    name: "Saurab Katuwal",
    image: "https://www.shutterstock.com/image-photo/portrait-young-confident-indian-teenager-600nw-2157123223.jpg",
    description: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Ruth Bishwakarma",
    image: "https://www.shutterstock.com/image-photo/smiling-positive-attractive-asian-young-260nw-2317594959.jpg",
    description: "Backend Developer",
  },
];

const AboutUs = () => {
 
  return (
    <div className="root about">
      <div className="container">
        <div id="team-section">
        <h1 className="section-title">Meet Our Team</h1>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
              <h2 className="member-name">{member.name}</h2>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;