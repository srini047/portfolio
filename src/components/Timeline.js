import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Icons for timeline elements
import { MdWork } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { MdDownloading } from "react-icons/md";
import { SiZoho } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Sep 2024 - Present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<DiAngularSimple />}
        >
          <h3 className="vertical-timeline-element-subtitle">Arrcus</h3>
          <h5 className="vertical-timeline-element-title">
            <i>Software Engineer</i>
          </h5>
          <p>C, Networking</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Feb 2024 - Aug 2024"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<SiZoho />}
        >
          <h3 className="vertical-timeline-element-subtitle">Zoho</h3>
          <h5 className="vertical-timeline-element-title">
            <i>Member of Technical Staff</i>
          </h5>
          <p>Pytorch, Audio, C++</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Feb 2023 - Jan 2024"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-subtitle">naas.ai</h3>
          <h5 className="vertical-timeline-element-title">
            <i>Software Developer Intern</i>
          </h5>
          <p>
            Fullstack web development, Python development, Open-source,
            Technical documentation
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Sep 2022 - Feb 2023"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<BsPencilFill />}
        >
          <h3 className="vertical-timeline-element-subtitle">Codedamn</h3>
          <h5 className="vertical-timeline-element-title">
            <i>Technical Content Writing Intern</i>
          </h5>
          <p>
            Published 15 blogs in domains of Python, Web development, Data
            Science, Machine Learning, C-C++
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="Aug 2022"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-subtitle">
            CVT(Coronavirus Visualization) Team
          </h3>
          <h5 className="vertical-timeline-element-title">
            <i>Research Intern</i>
          </h5>
          <p>
            Been a part of multinational team of interns in Analysis of the
            Impact of the Pandemic on School Closures due to Covid-19 and
            presented our research to panel of Harvard researchers.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          date="July 2022 - May 2023"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<CgGoogle />}
        >
          <h3 className="vertical-timeline-element-subtitle">PSG iTech</h3>
          <h5 className="vertical-timeline-element-title">
            <i>GDSC Lead</i>
          </h5>
          <p>
            Learnt about Google technologies like TensorFlow, Firebase, Angular
            & hosted events on the similar technologies
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
          icon={<MdDownloading />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
