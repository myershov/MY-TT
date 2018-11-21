//import firebase from 'firebase'
import uuid from 'uuid/v4'
import firebase from 'firebase/app'
import 'firebase/database'
var config = {
  apiKey: 'AIzaSyDYwuR4WAmBpK59cWtWWLOO_e4w8s_WU6s',
  authDomain: 'my-tt-e0347.firebaseapp.com',
  databaseURL: 'https://my-tt-e0347.firebaseio.com',
  projectId: 'my-tt-e0347',
  storageBucket: '',
  messagingSenderId: '784223530637',
}
firebase.initializeApp(config)

const database = firebase.database()
export default database
//firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export const addTaskToFirebase = task => {
  const id = task.key
  database.ref(`/Tasks/${id}`).set({
    task,
    id,
  })
}

export const removeTaskFromFirebase = id => {
  database.ref(`/Tasks/${id}`).remove()
}

export const addUserToFirebase = User => {
  const id = User.userName
  database.ref(`/USERS/${id}`).set({
    User,
    id,
  })
}
