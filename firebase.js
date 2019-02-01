import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB2lvjgxcLvcPq_mJuXzaXJTri8KzeLugA',
    authDomain: 'wedding-baeaa.firebaseapp.com',
    databaseURL: 'https://wedding-baeaa.firebaseio.com',
    projectId: 'wedding-baeaa',
    // storageBucket: process.env.storageBucket,
    // messagingSenderId: process.env.messagingSenderId
  })
}

export default firebase