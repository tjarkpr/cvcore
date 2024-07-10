import { EducationCard } from "../_components/education-card/education-card";
import "./education.css";
import { EducationData } from "./education_data";

export default function Page() {
  return (
    <div className="main-container">
      <div className="h-1/3 flex flex-col justify-center">
        {__Snippets()}
      </div>
      <div className="h-2/3 page">
        <div className="page-content px-10 py-6 overflow-scroll no-scrollbar scroll-smooth">
          {__Entries()}
        </div>
      </div>
    </div>
  );
}

function __Snippets(): JSX.Element {
  return (<div className="p-4 flex flex-row flex-nowrap justify-start items-start overflow-scroll education-container no-scrollbar scroll-smooth">
    {EducationData.map((element, index) => {
      return (<EducationCard
        key={index}
        info={element.info} 
        image={element.image} 
        link={"e"+index} />);
    })}
  </div>); 
}

function __Entries(): JSX.Element {
  return (<div className="flex flex-col flex-nowrap justify-start">
    {EducationData.map((element, index) => {
      return (<div key={index} id={"e"+index} className="flex flex-col flex-nowrap education-entry">
        <div className="flex flex-row flex-nowrap justify-between">
          <div>
            <p className="text-xs uppercase">{element.info.school}</p>
            <p className="text-sm font-semibold">{element.info.title}</p>
          </div>
          <div className="ms-2">
            <p className="text-xs uppercase text-right">{element.info.location}</p>
            <p className="text-xs text-right text-nowrap">{element.info.getDate()}</p>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {element.descriptions.map((inner_element, index) => {
            return (
              <li className="text-sm font-light" key={index}>{inner_element}</li>
            );
          })}
        </ul>
      </div>);
    })}
  </div>); 
}