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
  const templatePath = 'tools/generators/component/templates';
  const directoryPath = schema.directoryname
    ? `${workspace?.sourceRoot}/lib/${schema.directoryname}`
    : `${workspace?.sourceRoot}/lib`;
  const filename = `${schema.filename}.component`;
  const targetPath = join(directoryPath, filename);
  const componentNames = names(filename);
  const substitutions = {
    tmpl: '',
    ...componentNames,
  };
  generateFiles(tree, templatePath, targetPath, substitutions);
  await formatFiles(tree);
}
