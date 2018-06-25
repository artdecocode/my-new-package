import { debuglog } from 'util'

const LOG = debuglog('my-new-package')

/**
 * A test package to show the capabilities.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function myNewPackage(config = {}) {
  const {
    type,
  } = config
  LOG('my-new-package called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
