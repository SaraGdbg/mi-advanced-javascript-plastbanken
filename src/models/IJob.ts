export interface IJob {
  id: string;
  headline: string;
  occupation: {
    label: string;
  };
  workplace_address: {
    municipality: string;
    region: string;
    country: string;
    coordinates: number[];
  };
  application_deadline: string;
  duration: {
    label: string;
  };
  working_hours_type: {
    label: string;
  };
  publication_date: string;
  employer: {
    name: string;
    workplace: string;
  };
}

// not sure if we need text_formatted or text in description object yet

//IJobExt doesn't need to be within another interface as long as we seach for ad/:id, which seems like the easiest way to get it.

export interface IJobExt extends IJob {
  application_details: {
    url: string;
    via_af: boolean;
  };
  description: {
    conditions: string;
    text_formatted: string;
    // text: string;
  };
  driving_license_required: boolean;
  driving_license?: [
    {
      label: string;
    },
  ];
  employment_type: string;
  salary_description: string;
  salary_type: {
    label: string;
  };
  number_of_vacancies: number;
}
