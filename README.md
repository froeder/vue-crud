# vue-crud
Simple VueJS CRUD using Firebase Firestore.

Front-end framework used: Vuetify https://vuetifyjs.com/en/

## Cloning the repository

First of all, you'll need  to clone this repository, after doing this access the folder with:

` cd vue-crud `

Then, run the command below to install all dependencies for the project (make sure you have node.js installed):

` npm install `

## Setup Firebase

Now you need to create a Firebase account here https://firebase.google.com. You can use your regular Google account.

Now, create a project, go to Project Overview and click in `"Add Firebase to your web app"`, as below:

![alt add](img/add.png)

Copy the setting as below:

![alt settings](img/setting.png)

Now in the vue-crud , create a folder named `firebase` and into this folder, an archive named `index.js` ->  `firebase/index.js`

Into the `index.js` file, paste the code below:

```
import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'PasteYourApiKey',
  authDomain: 'PasteYourAuthDomainHere',
  databaseURL: 'PasteYourDatabaseURLHere',
  projectId: 'PasteYouProjectIdHere',
  storageBucket: 'PasteYourStorageBucketHere',
  messagingSenderId: 'PasteYourMessagingSenderIdHere',
  timestampsInSnapshots: true
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()
```
Now, open the vue-crud folder in terminal and paste the command below to install the Firebase dependencie:

`npm install firebase --save`

If you got here without problems, go on and have fun using it in your project.

A live demo can be found at: 

https://nuxtcrud.firebaseapp.com
