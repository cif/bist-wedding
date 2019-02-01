import firebase from 'firebase'
import 'now-env'

if (!firebase.apps.length) {
  console.log('process', process.env)
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