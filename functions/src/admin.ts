import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";
admin.initializeApp();

export const firestore = getFirestore();
export const database = getDatabase();
