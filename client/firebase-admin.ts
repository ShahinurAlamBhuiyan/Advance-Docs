import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Load service account credentials from environment variables
const serviceKey = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"), // Handle newline in private key
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

let app: App;

// Initialize Firebase Admin SDK
if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey as any),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
