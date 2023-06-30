// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`, 
    `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`, 
    `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]`, 
    `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
  }
   else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `(https://opensource.org/licenses/BSD-3-Clause)`, 
    `(https://opensource.org/licenses/Apache-2.0)`, 
    `(https://www.gnu.org/licenses/gpl-3.0)`, 
    `(https://opensource.org/licenses/MIT)`

  }
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `##License\n\n${(renderLicenseSection(data.license))}`
  }
  else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseLink(data.license)}
  
  ## Contact
  
  For questions or feedback, please feel free to reach out:
  
  - Email: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
