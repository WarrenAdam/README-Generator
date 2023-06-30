//  Create a function that returns a license badge and license link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    if(license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === 'APACHE 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === 'GPL 3.0') {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (license === 'BSD 3') {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    }
    else {
      return '';
    }
  }
  

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';

  }
  else {
    return `## License 
    ${license}`
  } ;
} 

//  Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
   ${renderLicenseBadge(data.license)}

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
  
  ${data.dependency}
  
  ## Usage
  
  ${data.repositoryInfo}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
 
  
  ## Contact
  
  For questions or feedback, please feel free to reach out:
  
  - Email: ${data.email}
  - GitHub: [${data.username}](https://github.com/${data.username})`;
}

module.exports = generateMarkdown;
