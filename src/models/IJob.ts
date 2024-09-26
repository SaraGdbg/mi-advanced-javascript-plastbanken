export interface IJob {
  id: string;
  headline: string;
  occupation: {
    name: string;
  };
  workplace_address: {
    municipality: string;
    region: string;
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
  };
}
