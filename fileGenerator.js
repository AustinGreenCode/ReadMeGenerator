function fileGenerator(response) {
    var content = `# ${response.title}
   ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email})
    `
    return content;
};

module.exports = fileGenerator;