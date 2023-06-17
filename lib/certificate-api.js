import fs from "fs";
import path from "path";

const certificateDirectory = path.join(process.cwd(), "public/certificate");

function orderCertificates(dir) {
  // take a list of certificate and orders them in
  // Udemy Courses -> DataCamp Courses -> Linkedin Courses

  let udemy_courses = [];
  let datacamp_courses = [];
  let linkedin_courses = [];
  let others = [];

  dir.forEach((course) => {
    if (course.startsWith("Udemy")) {
      udemy_courses.push(course);
    }
    if (course.startsWith("Linkedin")) {
      linkedin_courses.push(course);
    }
    if (course.startsWith("Datacamp")) {
      datacamp_courses.push(course);
    } else {
      others.push(course);
    }
  });

  const combinedArray = udemy_courses.concat(
    datacamp_courses,
    others,
    linkedin_courses
  );
  return combinedArray;
}

export function getCertificateData() {
  // Get all file name under public/certificate
  const allCertificates = fs.readdirSync(certificateDirectory);
  const orderedCertificates = orderCertificates(allCertificates);
  return orderedCertificates;
}
