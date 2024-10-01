export interface IJob {
  id: string;

  headline: string;
  // description of job title, example: "Projektledare, bygg och anläggning"
  occupation: {
    name: string;
  };

  workplace_address: {
    municipality: string;
    region: string;
    country: string;
    // can be used for link to google maps, if coords exists.
    coordinates?: number[];
  };
  application_deadline: string;

  // Examples: Tills vidare
  duration: {
    label: string;
  };
  // Examples: Heltid, Deltid
  working_hours_type: {
    label: string;
  };
  publication_date: string;

  employer: {
    // long formal name
    name: string;
    // Short name
    workplace: string;
    url?: string;
  };
}

// not sure if we need text_formatted or text in description object yet

//IJobExt doesn't need to be within another interface as long as we seach for ad/:id, which seems like the easiest way to get it.

export interface IJobExt extends IJob {
  application_details: {
    //link to when user can apply for the job
    url: string;
    // whether the ad is via AF or via external source
    via_af: boolean;
  };
  description: {
    conditions: string;
    // Big text about the job. Not sure yet if we want to use text_formatted or text. Can remove one once we're sure
    text_formatted: string;
    // text: string;
  };
  // if some kind of driving license is required
  driving_license_required: boolean;
  // IF a driving license is required, this displays which type, eg B. Only display this if driving_license_required is true.
  driving_license?: [
    {
      label: string;
    },
  ];
  // What type of employment. Examples: Vanlig anställning
  employment_type: {
    label: string;
  };
  // example: lön enligt överenskommelse
  salary_description: string;

  // example "Fast månads- vecko- eller timlön"
  salary_type: {
    label: string;
  };

  // Amount of jobs available in this job ad. 1 or more.
  number_of_vacancies: number;
}
