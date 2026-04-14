import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtTlrCf8KUqZyqZZPL7nbZoEVcLerQVlM",
  authDomain: "nexusgamelab-2d409.firebaseapp.com",
  projectId: "nexusgamelab-2d409",
  storageBucket: "nexusgamelab-2d409.firebasestorage.app",
  messagingSenderId: "959454919236",
  appId: "1:959454919236:web:cc6e159d8969888fc3da11",
  measurementId: "G-0VERSK7SZ0"
};

// Solo inicializar si no se ha hecho antes (evita errores en Next.js por SSR/Hot Reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
