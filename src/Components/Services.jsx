import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faBroom,
  faTruckPickup,
  faBrush,
  faHammer,
  faWrench,
  faCode,
  faMobile,
  faSuitcase,
  faBroadcastTower,
  faChartBar,
  faChalkboardTeacher,
  faChartGantt,
  faChartSimple,
  faChartPie,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import "./Services.scss";
import { faDigitalOcean, faMegaport } from "@fortawesome/free-brands-svg-icons";

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
                  <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Web Development</h3>
              <p>
                With a strong online presence, you can gain a larger customer
                base.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Mobile Applications</h3>
              <p>
                With the right mobile application tailored to your business, you
                can make your customers happier
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faLightbulb} />
                </i>
              </div>
              <h3>Digital Strategy and Innovation management</h3>
              <p>
                Identity and utilize your scarcest resources to achieve a
                competitive position
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faDigitalOcean}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Digital Transformation</h3>
              <p>
                With your customer on top of our mind, we transform your
                business to increase your customer satisfaction
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Promote your business by unlocking customer behavior via
                data-driven strategies using the right channel
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <i>
                  <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>
                </i>
              </div>
              <h3>Training</h3>
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
