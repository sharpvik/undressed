import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "./config";

const stories = collection(db, "stories");

export const addStory = (text, ts) => addDoc(stories, { text, ts });

export const getStory = (id) => getDoc(doc(stories, id));

export const getFeed = () =>
  getDocs(query(stories, orderBy("ts", "desc"), limit(256))).then((result) =>
    result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  );
