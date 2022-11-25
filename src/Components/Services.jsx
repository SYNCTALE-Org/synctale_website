import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faBroom,
  faTruckPickup,
  faBrush,
  faHammer,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

import "./Services.scss";

function Services() {
  return (
    <div className="serives-container" id="services">
      <section className="Services">
        <div className="row">
          <h2 className="section-heading">Our Services</h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faHammer}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faBrush}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faWrench} />
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faTruckPickup}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faBroom}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Service Heading</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
