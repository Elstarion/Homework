function PreviousJobs({title, description, name, link, employment}) {
  return (
    <div className="exp-description">
      <p>
        <span>Name of employer: </span>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        , Odessa
      </p>
      <p>
        <span>Dates of employment:</span> {employment}
      </p>
      <p>
        <span>Job title:</span> {title}
      </p>
      <p>
        <span>Job description:</span> {description}
      </p>
    </div>
  );  
}

export default function WorkExperience() {

  const work1 = {
    companyName: 'Anglo Eastern',
    companyLink: 'https://www.angloeastern.com/',
    jobTitle: '3rd Engineer',
    jobDescription: `Responsible for maintenance and repair of the mechanisms stated in the skills section. Carried out performance tests to track deviations in their work cycles.`,
    employmentDates: '06/2019 - 12/2021'
  }

  const work2 = {
    companyName: 'MSC',
    companyLink: 'https://www.msc.com/',
    jobTitle: 'Junior Engineer',
    jobDescription: `Learned various ship's systems and
    mechanisms. Responsible for fuel and water analysis. 3rd Engineer's
    assistant.`,
    employmentDates: '02/2013 - 01/2019'
  }

  return (
    <div className="rs-block">

      <p className="rs-titles" id="three">
        <a href="#three" className="label">
          C
        </a>
        Work Experience
      </p>
      <PreviousJobs
        name={work1.companyName}
        title={work1.jobTitle}
        link={work1.companyLink}
        description={work1.jobDescription}
        employment={work1.employmentDates}
      />
      <PreviousJobs
        name={work2.companyName}
        title={work2.jobTitle}
        link={work2.companyLink}
        description={work2.jobDescription}
        employment={work2.employmentDates}
      />
    </div>
  );
}