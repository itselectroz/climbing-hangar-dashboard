import * as admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
admin.initializeApp();

export const firestore = getFirestore();
export const bucket = getStorage().bucket();
