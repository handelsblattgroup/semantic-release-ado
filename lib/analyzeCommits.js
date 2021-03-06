module.exports = async (pluginConfig, { lastRelease: { version }, logger }) => {
  const setOnlyOnRelease = pluginConfig.setOnlyOnRelease || true

  if (!setOnlyOnRelease) {
    const varName = pluginConfig.varName || 'nextRelease'
    logger.log(`Setting current version ${version} to the env var ${varName}`)

    console.log(`##vso[task.setvariable variable=${varName}]${version}`)
  }
}
