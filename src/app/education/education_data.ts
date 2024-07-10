import { EducationDescription } from "../_components/education-card/education-card";

class CardElement {
    public readonly id: string;
    constructor(
        public readonly sort_value: Date,
    ) {
        this.id = crypto.randomUUID();
    }
}

export class EducationCardElement extends CardElement {
    constructor(
      public readonly info: EducationDescription,
      public readonly image: string,
      public readonly descriptions: string[]
    ) {
        super(info.start_date);
    }
}

export const EducationData: EducationCardElement[] = [
  new EducationCardElement(
    new EducationDescription(
      "M.Sc. D.Sc.",
      "Fern-Universität Hagen",
      new Date(2024, 4),
      null,
      "Berlin"
    ),
    "/logos/fern_universität_hagen_logo.png",
    [
      "Learning about the mathematical basics of data science.",
      "Performing and learning about steps of data engineering."
    ]
  ),
  new EducationCardElement(
    new EducationDescription(
      "M.Sc. C.Sc. & Eco.",
      "Fachhochschule Wedel",
      new Date(2023, 3),
      new Date(2021, 10),
      "Wedel"
    ),
    "/logos/fachhochschule_wedel_logo.jpeg",
    [
      "Learning about distributed computing and services with cloud integration.",
      "Learning about Soft-Computing and smart data.",
      "Learning about NoSQL Databases."
    ]
  ),
  new EducationCardElement(
    new EducationDescription(
      "B.Sc. C.Sc. & Eco.",
      "Fachhochschule Wedel",
      new Date(2021, 9),
      new Date(2017, 10),
      "Wedel"
    ),
    "/logos/fachhochschule_wedel_logo.jpeg",
    [
      "Learning about object oriented programming & design patterns.",
      "Learning about software development lifecycle and business process to application.",
      "Learning about machine learning basics."
    ]
  ),
  new EducationCardElement(
    new EducationDescription(
      "Abitur",
      "Detlefsengymnasium Glückstadt",
      new Date(2009, 9),
      new Date(2017, 7),
      "Glückstadt"
    ),
    "/logos/detlefsen_gymnasium_glückstadt_logo.png",
    [
      "Learning about the basics of IT in the Informatik lecture."
    ]
  )
].sort((a, b) => b.sort_value.getTime()-a.sort_value.getTime());