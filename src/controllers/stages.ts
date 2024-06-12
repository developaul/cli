class StageController {
  getStages() {
    const stages = ["development", "production", "test"];

    return stages;
  }
}

export const stageController = new StageController();
