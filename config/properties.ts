function setConfiguration(configJson) {
  try {
    PropertiesService.getScriptProperties().setProperties(configJson, false)
    return "Properties set."
  }
  catch(error) {
    console.log("ERROR: Unable to set properties -- " + error)
    return "Unable to set properties"
  }
}

function getProperty(key) {
  console.log("Getting property: " + key)
  return PropertiesService.getScriptProperties().getProperty(key)
}
