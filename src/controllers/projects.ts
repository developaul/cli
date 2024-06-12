class ProjectController {
  getProjects(): string[] {
    return ["Project 1", "Project 2"];
  }
}

export const projectController = new ProjectController();
