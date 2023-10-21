import firestore from '@react-native-firebase/firestore';

const fetchStoresByStoreIds = (storeIds: string[]) => {
  const collectionPath = firestore().collection('stores');
  const batches = [];

  while (storeIds.length) {
    // firestore limits batches to 10
    const batch = storeIds.splice(0, 10);

    batches.push(
      collectionPath
        .where(firestore.FieldPath.documentId(), 'in', [...batch])
        .get()
        .then(results => results.docs.map(result => ({...result.data()}))),
    );
  }

  // after all of the data is fetched, return it
  return Promise.all(batches).then(content => content.flat());
};

const fetchSimilarStoreByName = (name: string) =>
  firestore()
    .collection('stores')
    .where('name', '>=', `U1_${name}`.toLocaleUpperCase())
    .where('name', '<=', `U1_${name}`.toLocaleUpperCase() + '\uf8ff')
    .get();

export {fetchStoresByStoreIds, fetchSimilarStoreByName};
