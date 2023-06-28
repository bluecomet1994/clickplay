function resolvePath(str) {
  if (str === "/") {
    return str; // Return "/" as is if it's the only character in the string
  } else {
    const lastSlashIndex = str.lastIndexOf("/");
    if (lastSlashIndex === 0) {
      return str; // Return the string as is if it has only one "/" at the beginning
    } else {
      return str.substring(0, lastSlashIndex);
    }
  }
}


export default resolvePath;