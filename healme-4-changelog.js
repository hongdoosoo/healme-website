class ChangelogGenerator {
  constructor(config = {}) {
    this.version = '2.0.0';
    this.config = config;
  }

  generate(allGenerations = []) {
    const changelog = this.buildChangelog(allGenerations);
    
    return {
      changelog,
      version: this.version,
      timestamp: new Date().toISOString(),
      totalGenerations: allGenerations.length
    };
  }

  buildChangelog(allGenerations) {
    let changelog = `# HealMe Changelog\n\n`;
    changelog += `**Generated**: ${new Date().toISOString()}\n`;
    changelog += `**Total Generations**: ${allGenerations.length}\n\n`;

    if (allGenerations.length === 0) {
      changelog += `## No generations yet\n\nStart conversing to create your first generation.\n`;
      return changelog;
    }

    changelog += `## Generations Overview\n\n`;
    
    allGenerations.forEach((gen, index) => {
      const genNumber = index + 1;
      changelog += `### Generation ${genNumber}\n`;
      changelog += `- Created: ${new Date().toISOString()}\n`;
      changelog += `- Status: Active\n`;
      changelog += `- Progress: ${((genNumber / 1000) * 100).toFixed(2)}%\n\n`;
    });

    return changelog;
  }
}

module.exports = ChangelogGenerator;
