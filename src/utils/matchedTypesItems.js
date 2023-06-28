function matchTypedItems(typedItems, items) {
  const typedItemsArray = typedItems.split(" ");
  let matchedItems = 0;

  for (let i = 0; i < typedItemsArray.length; i++) {
    if (items.includes(typedItemsArray[i])) {
      matchedItems++;
    }
  }

  return matchedItems;
}

export default matchTypedItems;