import { collection, doc, getDoc, addDoc } from "firebase/firestore";

import { db } from "./config";

const stories = collection(db, "stories");

export const addStory = (text, ts) => addDoc(stories, { text, ts });

export const getStory = (id) => getDoc(doc(stories, id));
