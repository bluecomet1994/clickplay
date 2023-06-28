function paramsResolver(str) {
  const numberRegex = /\d+/;
  const match = str.match(numberRegex);
  if (match) {
    return Number(match[0]); 
  }
  return null; 
}

export default paramsResolver;