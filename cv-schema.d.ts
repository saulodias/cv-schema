/**
 * A standard CV format that addresses the requirements of most common applicant's information.
 */
export interface CVSchema {
  /**
   * The language used in the CV, identified by its four-letter code according to the IETF language tag specification.
   * The code is composed of an ISO 639-1 or 639-2 language code, followed by an ISO 3166-1 alpha-2 country code, separated by a hyphen
   * (e.g., en-US for English spoken in the United States, fr-CA for French spoken in Canada).
   * Please refer to the IETF language tag specification for more information.
   */
  languageCode: string;

  /**
   * A base64-encoded image of the applicant's profile picture.
   * @example "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDFweCIgaGVpZ2h0PSI0MDFweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAzMTIuODA5IDAgNDAxIDQwMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIzMTIuODA5IDAgNDAxIDQwMSI+CjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjIzIDAgMCAxLjIyMyAtNDY3LjUgLTg0My40NCkiPgoJPHJlY3QgeD0iNjAxLjQ1IiB5PSI2NTMuMDciIHdpZHRoPSI0MDEiIGhlaWdodD0iNDAxIiBmaWxsPSIjRTRFNkU3Ii8+Cgk8cGF0aCBkPSJtODAyLjM4IDkwOC4wOGMtODQuNTE1IDAtMTUzLjUyIDQ4LjE4NS0xNTcuMzggMTA4LjYyaDMxNC43OWMtMy44Ny02MC40NC03Mi45LTEwOC42Mi0xNTcuNDEtMTA4LjYyeiIgZmlsbD0iI0FFQjRCNyIvPgoJPHBhdGggZD0ibTg4MS4zNyA4MTguODZjMCA0Ni43NDYtMzUuMTA2IDg0LjY0MS03OC40MSA4NC42NDFzLTc4LjQxLTM3Ljg5NS03OC40MS04NC42NDEgMzUuMTA2LTg0LjY0MSA3OC40MS04NC42NDFjNDMuMzEgMCA3OC40MSAzNy45IDc4LjQxIDg0LjY0eiIgZmlsbD0iI0FFQjRCNyIvPgo8L2c+Cjwvc3ZnPg=="
   */
  imageData?: string;

  /**
   * The full name of the applicant.
   */
  name: string;

  /**
   * A brief title describing the applicant's professional expertise.
   */
  title?: string;

  /**
   * The applicant's contact information.
   */
  contact: ContactInformation;

  /**
   * A list of the applicant's educational history.
   */
  education: EducationProgram[];

  /**
   * A list of languages spoken by the applicant and their proficiency levels.
   */
  languages?: Language[];

  /**
   * A list of the applicant's technical and professional skills.
   */
  skills?: Skill[];

  /**
   * A list of the applicant's past work experiences.
   */
  experience: Experience[];

  /**
   * A list of the applicant's personal or professional projects.
   */
  projects: Project[];

  /**
   * A list of the applicant's certifications and licenses.
   */
  certifications: Certification[];

  /**
   * A brief summary of the applicant's professional background and career goals.
   */
  about: string;

  /**
   * Additional properties that are not part of the schema.
   */
  [additionalProperties: string]: unknown;
}

/**
 * An interface representing the applicant's contact information.
 */
export interface ContactInformation {
  /**
   * The applicant's email address.
   */
  email?: string;

  /**
   * A list of websites associated with the applicant.
   */
  websites?: Website[];

  /**
   * The applicant's phone number.
   */
  phone?: string;

  /**
   * The applicant's address.
   */
  address?: Address;
}

/**
 * An interface representing an educational history item.
 */
export interface EducationProgram {
  /**
   * The name of the educational institution.
   */
  institution: string;

  /**
   * The degree obtained or the program pursued at the institution.
   */
  degree: string;

  /**
   * The field of study for the educational program.
   */
  fieldOfStudy?: string;

  /**
   * The start date of the educational program.
   */
  startDate: string;

  /**
   * This field can be null if the position is ongoing, and can also contain partial dates (e.g., '2012-04' for April 2012).
   * The end date of the educational program.
   */
  endDate?: string | null;

  /**
   * A brief description of the program, including skills acquired.
   */
  description?: string;

  /**
   * Honors, awards, or distinctions received during the educational program.
   */
  honors?: string;

  /**
   * The score of the educational program.
   */
  score?: Score;
}

/**
 * An interface representing a website associated with the applicant.
 */
export interface Website {
  /**
   * A URL to a website associated with the applicant.
   */
  url: string;

  /**
   * The type of website (e.g., Blog, Personal, Portfolio, Professional Profile).
   */
  type: string;
}

/**
 * An interface representing a language spoken by the applicant and their proficiency level.
 */
export interface Language {
  /**
   * The name of the language.
   */
  language: string;

  /**
   * The level of proficiency in the language (e.g., Elementary, Limited Working, Professional, Native or Bilingual).
   */
  proficiency: string;
}

/**
 * An interface representing a technical or professional skill possessed by the applicant.
 */
export interface Skill {
  /**
   * The name of the skill.
   * */
  skill: string;
  /**
   * The proficiency level of the skill (e.g., Beginner, Intermediate, Advanced, Expert).
   */
  level?: string;
}

/**
 * Represents the applicant's work experience.
 */
interface Experience {
  /**
   * The name of the employer.
   */
  name: string;

  /**
   * The company's address.
   */
  address?: Address;

  /**
   * A brief description of the employer, including industry and size.
   */
  description?: string;

  /**
   * A link to the employer's website.
   */
  website?: string;

  /**
   * The start date of employment.
   */
  startDate: string;

  /**
   * The end date of employment or null if still employed.
   */
  endDate?: string | null;

  /**
   * The duration of the employment (e.g., 2 years 3 months).
   */
  duration?: string;

  /**
   * A list of positions held by the applicant at the company.
   */
  positions: Position[];
}

/**
 * Represents a position held by the applicant.
 */
export interface Position {
  /**
   * The title of the position held by the applicant.
   */
  title: string;

  /**
   * The type of employment (e.g., Full-time, Part-time, Contract, Internship).
   */
  type: string;

  /**
   * The location of the position, including city and country.
   */
  location: string;

  /**
   * The duration of the position (e.g., 2 years 3 months).
   */
  duration?: string;

  /**
   * The start date of the position.
   */
  startDate: string;

  /**
   * The end date of the position or null if currently employed.
   */
  endDate?: string | null;

  /**
   * A description of the applicant's responsibilities and achievements in the position.
   */
  description: string;

  /**
   * The work arrangement for the position (e.g., On-site, Remote, Hybrid).
   */
  locationType?: string;

  /**
   * A list of skills and technologies used in the position.
   */
  skills?: string[];
}

/**
 * An interface representing a personal or professional project undertaken by the applicant.
 */
export interface Project {
  /**
   * The name of the project.
   */
  name: string;
  /**
   * A brief description of the project, including goals, technologies used, and outcomes.
   */
  description: string;
  /** A URL to view the project, if available (e.g., GitHub repository, Portfolio page).
   */
  url?: string;
  /** The start date of the project.
   */
  startDate: string;
  /** The end date of the project or null if the project is still in progress.
   */
  endDate?: string | null;
}

/**
 * Represents a certification or license held by an applicant.
 */
interface Certification {
  /**
   * The name of the certification.
   */
  name: string;
  /**
   * The organization that issued the certification.
   */
  organization: string;
  /**
   * The date the certification was obtained. Must be in partial-date format (YYYY-MM or YYYY).
   */
  dateObtained: string;
  /**
   * The expiration date of the certification, if applicable. Must be in partial-date format (YYYY-MM or YYYY).
   */
  expirationDate?: string | null;
  /**
   * The identification number or code for the certification, if applicable (e.g., License number, Certificate number).
   */
  id?: string;
  /**
   * A URL to verify the certification, if available.
   */
  url?: string;
}

/**
 * An interface representing a postal address.
 */
export interface Address {
  /**
   * The name of the country.
   */
  country: string;
  /**
   * The name of the state or region.
   */
  stateProvince?: string;
  /**
   * The name of the city or town.
   */
  city: string;
  /**
   * The postal code or ZIP code of the address.
   */
  postalCode?: string;
  /**
   * The first line of the street address.
   */
  addressLine1: string;
  /**
   * The second line of the street address.
   */
  addressLine2?: string;
}

/**
 * An interface representing the score of an educational program.
 */
export interface Score {
  /**
   * The numeric value of the score.
   */
  value: number;
  /**
   * The unit of the score (e.g. GPA, percentile, etc.).
   */
  unit: string;
}
