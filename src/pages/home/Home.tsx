import React from "react";
import RoleButton from "../../components/buttons/roles-button/RolesButtons";
import App from "../../components/ContainerApp";
import "./Home.css";

function Home() {
  return (
    <App>
      <div className="home-content">
        <h2 className="home-title">Select a role</h2>
        <div className="center">
          <nav className="nav">
            <RoleButton labelItem="top" />
            <RoleButton labelItem="jungle" />
            <RoleButton labelItem="middle" />
            <RoleButton labelItem="bottom" />
            <RoleButton labelItem="support" />
          </nav>
        </div>
      </div>
    </App>
  );
}

export default Home;
