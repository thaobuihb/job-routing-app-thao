export async function dataLoader(q) {
    try {
      const res = await fetch("http://localhost:4000/jobs");
      const jobs = await res.json();
      if (q) {
        let filtedJobs = jobs.filter(
          (job) =>
            job.title.includes(q) ||
            job.description.includes(q) ||
            job.city.includes(q) ||
            job.skills.some((skill) => skill.includes(q))
        );
        return filtedJobs;
      } else return jobs;
    } catch (error) {
      console.log(error);
    }
  }