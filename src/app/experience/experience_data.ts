import { ExperienceDescription, ExperienceType } from "../_components/experience-card/experience-card";

class CardElement {
    public readonly id: string;
    constructor(
        public readonly sort_value: Date,
    ) {
        this.id = crypto.randomUUID();
    }
}

export class ExperienceCardElement extends CardElement {
    constructor(
      public readonly info: ExperienceDescription,
      public readonly image: string,
      public readonly descriptions: string[]
    ) {
        super(info.start_date);
    }
}

export const ExperienceData: ExperienceCardElement[] = [
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "Arvato Systems GmbH",
        new Date(2024, 1),
        null,
        "Berlin",
        ExperienceType.FULL_TIME,
      ),
      "/logos/arvato_systems_logo.svg",
      [
        "System design, development (.NET, CosmosDb NoSQL, GraphQL, Service Bus, EventHub) and deployment (MS Azure)."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "Arvato Systems GmbH",
        new Date(2023, 5),
        new Date(2024, 1),
        "Hamburg",
        ExperienceType.FULL_TIME
      ),
      "/logos/arvato_systems_logo.svg",
      [
        "GAIA-X 4 ROMS: Research project regarding future mobility services for parcel logistics."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Masterthesis",
        "Mercedes-Benz Tech Innovation GmbH",
        new Date(2022, 10),
        new Date(2023, 2),
        "Stuttgart",
        ExperienceType.FULL_TIME
      ),
      "/logos/mercedes_benz_tech_innovation_logo.png",
      [
        "Researching data pipelines and machine learning models for collected data during functional safety processes according to the ISO 26262 (Python, Tensorflow, PySpark, Databricks)."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "P&M Agentur Software + Consulting GmbH",
        new Date(2021, 9),
        new Date(2022, 8),
        "Hamburg",
        ExperienceType.WORKING_STUDENT
      ),
      "/logos/p&m_agency_software_consulting_logo.png",
      [
        "Developing a portal in ASP.NET Zero for seat reservation in a project leading role.",
        "Enhancing a portal in Symfony with connection to an identity provider (IdentityServer 4, ASP .NET).",
        "Implementing designs in Vue.js and Twig."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Bachelorthesis",
        "P&M Agentur Software + Consulting GmbH",
        new Date(2021, 6),
        new Date(2021, 8),
        "Hamburg",
        ExperienceType.FULL_TIME
      ),
      "/logos/p&m_agency_software_consulting_logo.png",
      [
        "Frameworks in the context of agile software development, prototyping a project according to the RAPID Paradigm.",
        "Developing a desk reservation platform as a Software-as-a-Service (SaaS) solution."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "P&M Agentur Software + Consulting GmbH",
        new Date(2021, 3),
        new Date(2021, 5),
        "Hamburg",
        ExperienceType.INTERNSHIP
      ),
      "/logos/p&m_agency_software_consulting_logo.png",
      [
        "Developing a tool to support the internal project controlling with the Django framework.",
        "Developing and deploying a plugin for digital time tracking on Jira tickets."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "Steinbeis Papier GmbH",
        new Date(2020, 11),
        new Date(2021, 1),
        "Glückstadt",
        ExperienceType.INTERNSHIP
      ),
      "/logos/steinbeis_papier_logo.png",
      [
        "Developing an integrated measurement software for paper thickness.",
        "Communicating with relevant stakeholders to ease production integration."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Software Engineer",
        "TP Software",
        new Date(2021, 3),
        new Date(2022, 7),
        "Glückstadt",
        ExperienceType.FREELANCING
      ),
      "/logos/tjark_prokoph_software_logo.png",
      [
        "Developing static web pages.",
        "Developing excel automations with macros."
      ]
    ),
    new ExperienceCardElement(
      new ExperienceDescription(
        "Data Collector",
        "Rörd Braren Bereederungs GmbH & Co. KG",
        new Date(2018, 11),
        new Date(2020, 1),
        "Kollmar",
        ExperienceType.WORKING_STUDENT
      ),
      "/logos/rörd_braren_bereederung_logo.png",
      [
        "Capturing of technical fleet data. Providing documentation of fleet components.",
        "Maintaining inspection periods of critical parts."
      ]
    )
  ].sort((a, b) => b.sort_value.getTime()-a.sort_value.getTime());