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

  ## Description
  ${userResponse.projectDescription}

  ## Languages Used
  ${userResponse.projectLanguages}

  ## Installation
  ${userResponse.projectInstallation}

  ## License
  ${userResponse.projectLicense}

  ## Contributors For This Project
  ${userResponse.projectContributors}

  Connect with me on GitHub: [${userResponse.userGitHub}](https://github.com/${userResponse.userGitHub})<br />
  <br />

  Contact me via email at: ${userResponse.userEmail}<br />
  <br />
`;
}

module.exports = generateMarkdown;
