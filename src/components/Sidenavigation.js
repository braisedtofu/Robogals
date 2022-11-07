import { Sidenav} from 'rsuite';
import React from "react";
import "../styles/Sidenavigation.css";

class Sidenavigation extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1"
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { expanded } = this.state;
  
      const links = [
        <a href="#intro">Home</a>,
        <a href="#about">About</a>,
        <a href="#experience">Workshops</a>,
        <a href="#projects">Events</a>
      ];

      const isMobile = window.innerWidth < 600;

  
      return (
        <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
            </Sidenav.Body>

          </Sidenav>
        )}
      </div>
    );
  }
}
  
  export default Sidenavigation;
  