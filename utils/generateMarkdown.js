const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
  <h1 align='center'>${userResponse.projectTitle}</h1>

  ![badge](https://img.shields.io/badge/license-${userResponse.projectLicense}-brightgreen)<br/>

  ![alt text](${userResponse.projectVisual})

  ## Table of Contents
  - [Description](#projectDescription)
  - [Languages](#projectLanguages)
  - [Installation](#projectInstallation)
  - [License](#projectLicense)
  - [Contributors For This Project](#projectContributors)
  - [Tests](#projectTest)

  ## Description
  ${userResponse.projectDescription}

  ## Languages Used
  ${userResponse.projectLanuages}

  ## Installation
  ${userResponse.projectInstallation}

  ## License
  ${userResponse.projectLicense}

  ## Contributors For This Project
  ${userResponse.projectContributors}

  ## Tests
  ${userResponse.projectTest}
  <br />

  Connect with me on GitHub: [${userResponse.userGitHub}](https://github.com/${userResponse.userGitHub})<br />
  <br />

  Contact with me via email: ${userResponse.userEmail}<br />
  <br />
`;
}

module.exports = generateMarkdown;
