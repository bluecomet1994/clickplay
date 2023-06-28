function fetchRandomItems(array,count) {
  const itemsToFetch = count ?? 40;
  const randomItems = [];

  while (randomItems.length < itemsToFetch) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];

    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }

  return randomItems;
}

export default fetchRandomItems;