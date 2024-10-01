export interface IJob {
  id: string;

  // if we want to display logotype of company
  logo_url: string | null;
  headline: string;
  // description of job title, example: "Projektledare, bygg och anläggning", "Bussmekaniker"
  occupation: {
    name: string;
  };

  workplace_address: {
    municipality: string | null;
    region: string | null;
    country: string | null;
    // can be used for link to google maps, if coords exists.
    coordinates: number[] | null;
  };
  application_deadline: string;

  // Examples: "Tills vidare", "6 månader eller längre"
  duration: {
    label: string | null;
  };
  // Examples: Heltid, Deltid
  working_hours_type: {
    label: string | null;
  };
  publication_date: string;

  employer: {
    // long formal name
    name: string;
    // Short name
    workplace: string;
    url: string | null;
  };
}

// not sure if we need text_formatted or text in description object yet

//IJobExt doesn't need to be within another interface as long as we seach for ad/:id, which seems like the easiest way to get it.

export interface IJobExt extends IJob {
  // Most jobs seems to have application via url, some jobs don't and use email instead. So we will need to render conditionally depending on whether you can apply via link or email. Have yet to find a job that uses both or neither field.
  application_details: {
    // whether the ad is via AF or via external source. Not sure if we will use this one, could maybe remove it.
    via_af: boolean;
    //link to where user can apply for the job
    url: string | null;
    // email link for where to send job application
    email: string | null;
  };
  description: {
    conditions: string | null;
    // Big text about the job. Not sure yet if we want to use text_formatted or text. Can remove one once we're sure
    text_formatted: string;
    // text: string;
  };
  // if some kind of driving license is required
  driving_license_required: boolean;
  // IF a driving license is required, this displays which type, eg B. Only display this if driving_license_required is true.
  //Array OR null
  driving_license:
    | [
        {
          label: string;
        },
      ]
    | null;
  // What type of employment. Examples: Vanlig anställning
  employment_type: {
    label: string;
  };
  // can be null, possible undefined. Might be worth only showing if it contains a string. example: "lön enligt överenskommelse"
  salary_description: string | null;

  // example "Fast månads- vecko- eller timlön", "Fast och rörlig lön"
  salary_type: {
    label: string;
  };

  // Amount of jobs available in this job ad. 1 or more.
  number_of_vacancies: number;
}
