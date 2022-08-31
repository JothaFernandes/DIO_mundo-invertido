import app from './app.js'
import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClube(subscription){
    const db = getFirestore(app)
    const hellFireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellFireClubCollection, subscription)
    return docRef.id
}