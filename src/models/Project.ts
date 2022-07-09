interface Project {
    projectId: string,
    userIds: Array<string>,
    rule: string,
    gatewayIds: Array<string>,
    name: string
};

interface ProjectModel {
    projects: Project[],
};

export default ProjectModel;