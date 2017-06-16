import path from 'path';
import test from 'tape';
import checkBootstrapVersion from '../../../src/utils/checkBootstrapVersion';

test('checkBootstrapVersion compares version parameter with package.json version', (assert) => {
  const bPath = `${path.join(`${__dirname}`, '../../../')}`;

  assert.equals(checkBootstrapVersion(2, bPath).allGood, true);
  assert.end();
});

test('checkBootstrapVersion keeps the contract', (assert) => {
  const bPath = `${path.join(`${__dirname}`, '../../../')}`;
  const result = checkBootstrapVersion(2, bPath);

  assert.assert(Object.prototype.hasOwnProperty.call(result, 'version'));
  assert.assert(Object.prototype.hasOwnProperty.call(result, 'allGood'));
  assert.end();
});

