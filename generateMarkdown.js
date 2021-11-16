function generateMarkdown(data) {
    return `# ${ data.title }
## Table of Contents:

  1.[Description](#describe)
  2.[Installation](#install)
  3.[Usage](#use)
  7.[GitHub](#GitHub)

## Description
${ data.describe } 
## Installation
${ data.install }
## Usage
${ data.use }
## GitHub
${ data.github }
## E - mail
${ data.email } `
}
  module.exports = generateMarkdown;

