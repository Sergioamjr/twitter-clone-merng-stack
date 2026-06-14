import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./twitter-clone-52312-firebase-adminsdk-fbsvc-8eec56b31c.json";

admin.initializeApp({
  credential: admin.cert(serviceAccount as admin.ServiceAccount),
});

const db = getFirestore();

export { db };
