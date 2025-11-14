// utils/index.js
// HealMe 특허2 모듈 통합 관리

/**
 * 모든 특허2 모듈을 한 곳에서 관리
 * PromptOptimizer, ChangelogGenerator 등을 export
 */

// 모듈 import
const PromptOptimizer = require('../api/healme-prompt-optimizer');
const ChangelogGenerator = require('../api/healme-changelog-generator');

/**
 * 모든 모듈을 한 번에 초기화하고 관리
 */
class HealMePatent2Manager {
  constructor(config = {}) {
    this.promptOptimizer = new PromptOptimizer(config.promptConfig);
    this.changelogGenerator = new ChangelogGenerator(config.changelogConfig);
    this.initialized = true;
    this.timestamp = new Date().toISOString();
  }

  /**
   * PromptOptimizer 사용
   */
  optimizePrompt(generationData) {
    return this.promptOptimizer.generate(generationData);
  }

  /**
   * ChangelogGenerator 사용
   */
  generateChangelog(allGenerations) {
    return this.changelogGenerator.generate(allGenerations);
  }

  /**
   * 모든 모듈 상태 확인
   */
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

// Export
module.exports = {
  HealMePatent2Manager,
  PromptOptimizer,
  ChangelogGenerator
};
