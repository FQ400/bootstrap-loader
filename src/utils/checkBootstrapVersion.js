/* eslint global-require:0, import/no-dynamic-require:0 */

import path from 'path';
import semver from 'semver';

const getVersionFromPackage = (bPath) => require(path.join(bPath, 'package.json')).version;

/**
 * Checks Bootstrap version
 *
 * @param   {number} bootstrapVersion
 * @param   {string} bootstrapPath
 * @returns {Object}
 */
export default function(bootstrapVersion, bootstrapPath, extractVersion = getVersionFromPackage) {
  const npmVersion = extractVersion(bootstrapPath);

  return {
    version: npmVersion,
    allGood: semver.major(npmVersion) === bootstrapVersion,
  };
}
