import * as admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";
admin.initializeApp();

export const firestore = getFirestore();
export const bucket = getStorage().bucket();
export const database = getDatabase();
