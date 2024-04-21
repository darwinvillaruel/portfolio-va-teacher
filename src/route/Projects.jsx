import Header from "../components/Header";
import Carousel from "../components/Carousel";
import courseware from "/courseware-sample.jpg";

const slides = [
  {
    url: "/tos-001.jpg",
    title: "tos01",
  },
  {
    url: "/tos-002.jpg",
    title: "tos02",
  },
];

const slides2 = [
  {
    url: "/lessonplan01.jpg",
    title: "pl01",
  },
  {
    url: "/lessonplan02.jpg",
    title: "pl02",
  },
  {
    url: "/lessonplan03.jpg",
    title: "pl03",
  },
  {
    url: "/lessonplan04.jpg",
    title: "pl04",
  },
];

const Projects = () => {
  return (
    <div className="font-poppins md:container md:mx-auto my-14 px-4">
      <Header />
      <div className="md:grid grid-cols-2">
        <Carousel slides={slides} />
        <div className="mt-4">
          <h1 className="mb-5 font-semibold">Table of Specification</h1>
          <p>
            The Table of Specifications (TOS) project is a project that showcases expertise in instructional design and
            assessment. This project demonstrates the ability to create a structured assessment blueprint that aligns
            with learning objectives and instructional content.
          </p>
          <p className="mt-3">
            <strong>Learning Objectives</strong>: The project includes a comprehensive list of learning objectives or
            standards that serve as the foundation for assessment development. These objectives are derived from
            curriculum guidelines and represent the knowledge and skills students are expected to acquire.
          </p>
          <p className="mt-3">
            <strong>Assessment Specifications</strong>: Detailed specifications are provided for each assessment item,
            including type of test, no. of items, scoring criteria, and item location. These specifications ensure
            consistency in assessment administration and facilitate accurate scoring.
          </p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="md:grid grid-cols-2">
        <Carousel slides={slides2} />
        <div className="mt-4">
          <h1 className="mb-5 font-semibold">Lesson Plan</h1>
          <p>
            The Lesson Plan project showcases their ability to design and implement effective instructional experiences
            that promote student learning and engagement. This project demonstrates the teacher's expertise in
            curriculum development, pedagogy, and classroom management, as well as their commitment to meeting the
            diverse needs of learners.
          </p>
          <p className="mt-3">
            <strong>Content and Materials</strong>: The lesson plan specifies the content to be taught and identifies
            the materials and resources needed to support instruction. This may include textbooks, multimedia resources,
            manipulatives, and technology tools to enhance learning.
          </p>
          <p className="mt-3">
            <strong>Assessment and Evaluation</strong>: The lesson plan outlines methods for assessing student learning
            and understanding. This may include formative assessment strategies embedded throughout the lesson, as well
            as summative assessments to measure student mastery of the lesson objectives.
          </p>
          <p className="mt-3">
            <strong>Integration of Technology</strong>: The lesson plan leverages technology to enhance instruction and
            facilitate student learning. This may include the use of interactive whiteboards, educational software,
            multimedia presentations, and online resources to support teaching and learning objectives.
          </p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="md:grid grid-cols-2">
        <img
          src={courseware}
          alt="courseware"
        />
        <div>
          <h1 className="mb-5 font-semibold">Courseware</h1>
          <p>
            The Courseware Development project showcases the ability to create comprehensive and engaging learning
            resources that support student learning across an entire course or subject area. This project demonstrates
            the teacher's expertise in curriculum design, instructional technology integration, and pedagogical
            innovation.
          </p>
          <p className="mt-3">
            <strong>Curriculum Alignment</strong>: The project aligns the courseware with relevant curriculum standards,
            learning objectives, and educational frameworks, ensuring that instructional content and activities are
            aligned with established educational goals and expectations.
          </p>
          <p className="mt-3">
            <strong>Multimodal Instructional Strategies</strong>: The courseware incorporates a diverse range of
            instructional strategies and delivery modes to accommodate different learning styles and preferences. This
            may include lectures, discussions, hands-on activities, collaborative projects, and multimedia presentations
            to appeal to varied learner needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
