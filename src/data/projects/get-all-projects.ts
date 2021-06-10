import { PROJECTS_URL } from '../../config/app-config';
import { ProjectData } from '../../domain/projects/project';
import { fetchJson } from '../../utils/fetch-json';

import PROJECTSJSON from '../json/projectsResponse.json';

export const getAllProjects = async (): Promise<any[]> => {
  //const projects = await fetchJson<ProjectData[]>(PROJECTS_URL);
  const projects = PROJECTSJSON;
  return projects;
};
