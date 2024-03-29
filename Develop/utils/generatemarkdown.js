function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache License 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "ISC License") {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else {
      return "";
    }
  }
  
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache License 2.0") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "GNU GPLv3") {
      return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "ISC License") {
      return "https://opensource.org/licenses/ISC";
    } else {
      return "";
    }
  }
  
  function renderLicenseSection(license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
  
    if (license) {
      return `
  
  This project is covered under the ${license} license. ${licenseLink}
      
  ${licenseBadge}`;
    } else {
      return "";
    }
  }
  
  function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseSection}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
    
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## License
  
  ${licenseSection}
  
  ## Questions
  
  your email ${data.email}. and github (https://github.com/${data.github}).
    `;
  }
  
  module.exports = {
    generateMarkdown: generateMarkdown,
    renderLicenseBadge: renderLicenseBadge,
  };