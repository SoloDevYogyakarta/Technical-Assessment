import {
  Tree,
  formatFiles,
  getProjects,
  names,
  generateFiles,
} from '@nrwl/devkit';
import { join } from 'path';
import { ISchema } from '../schema';

export default async function (tree: Tree, schema: ISchema) {
  const workspace = getProjects(tree).get(schema.projectname);
  const templatePath = 'tools/generators/store/actions/templates';
  const directoryPath = schema.directoryname
    ? `${workspace?.sourceRoot}/lib/${schema.directoryname}`
    : `${workspace?.sourceRoot}/lib`;
  const targetPath = join(directoryPath, schema.filename);
  const actionsNames = names(schema.filename);
  const substitutions = {
    tmpl: '',
    ...actionsNames,
  };
  generateFiles(tree, templatePath, targetPath, substitutions);
  await formatFiles(tree);
}
