import data from "../data/data";

const ExperienceCard = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Experience</h1>
      {data.map(({ employer, position, location, date, responsibilities }, index) => (
        <div
          key={index}
          className="my-5 pb-5">
          <div className="md:flex text-sm">
            <div>{date}</div>
            <div className="ml-auto">
              {employer} - {location}
            </div>
          </div>
          <div className="my-3 font-semibold">{position}</div>
          {responsibilities.map((item, index) => (
            <div key={index}>
              <ul className="list-disc list-outside ms-5">
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
