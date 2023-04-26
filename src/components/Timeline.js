import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Icons for timeline elements
import { MdWork } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { CgGoogle } from "react-icons/cg";
import { MdDownloading } from "react-icons/md";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Jan 2023 - present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Devrel Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Naas.ai</h4>
          <p>Fullstack web developement, Python developement, Open-source, Technical documentation</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Sep 2022 - Feb 2023"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<BsPencilFill />}
        >
          <h3 className="vertical-timeline-element-title">Technical Content Writing Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Codedamn</h4>
          <p>Published 15 blogs in domains of Python, Web developement, DataScience, Machine Learning, C-C++</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="July 2022 - present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<CgGoogle />}
        >
          <h3 className="vertical-timeline-element-title">GDSC Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">PSG iTech</h4>
          <p>Learnt about Google technologies like TensorFlow, Firebase, Angular & hosted events on the similar technologies</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdDownloading />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
