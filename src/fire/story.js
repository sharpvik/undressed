import { collection, doc, addDoc } from "firebase/firestore";

import { db } from "./config";

const stories = collection(db, "stories");

export const addStory = (text) => addDoc(stories, { text });
