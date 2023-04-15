<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  get,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore/lite';
import {fb} from '../firebase/config';
export default {
  name: 'HomeView',
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books");
      const fbDocs = await getDocs(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docId = fbDocs.docs.map((doc) => doc.id)
      /*
      addDoc(fbRef, {
        name: 'Socrates',
        author: "Ploton",
        pageCount: 200,
      });
      */ // Veri ekleme
      /*
      const docRef = doc(db, 'books', "91WjcO7jTX23Dtlioeyl")
      deleteDoc(docRef);
       */ // veri silme
      /*
      const q = query(fbRef, where("pageCount", "==", 200));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
       */ // Veri Çekme
      return data
    });
  }
}
</script>
