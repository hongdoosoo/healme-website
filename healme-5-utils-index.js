const PromptOptimizer = require('./healme-3-optimizer.js');
const ChangelogGenerator = require('./healme-4-changelog.js');

class HealMePatent2Manager {
  constructor(config = {}) {
    this.promptOptimizer = new PromptOptimizer(config.promptConfig);
    this.changelogGenerator = new ChangelogGenerator(config.changelogConfig);
    this.initialized = true;
    this.timestamp = new Date().toISOString();
  }

  optimizePrompt(generationData) {
    return this.promptOptimizer.generate(generationData);
  }

  generateChangelog(allGenerations) {
    return this.changelogGenerator.generate(allGenerations);
  }

  getStatus() {
    return {
      initialized: this.initialized,
      timestamp: this.timestamp,
      modules: {
        promptOptimizer: {
          status: 'active',
          version: this.promptOptimizer.version
        },
        changelogGenerator: {
          status: 'active',
          version: this.changelogGenerator.version
        }
      }
    };
  }
}

module.exports = {
  HealMePatent2Manager,
  PromptOptimizer,
  ChangelogGenerator
};
