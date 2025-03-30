import { auth } from "../firebase"; // Ensure correct path
import { db } from "../firebase"; // Ensure correct path
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// Save or update user profile info
export const saveUserProfile = async (userInfo) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No user is logged in.");
    throw new Error("User is not logged in");
  }

  const uid = user.uid;

  try {
    // Reference the document in the Firestore `user_info` collection
    const userDoc = doc(db, "user_info", uid); // Correctly reference Firestore

    await setDoc(
      userDoc,
      {
        ...userInfo,
        updatedAt: serverTimestamp(), // Timestamp to track profile update time
      },
      { merge: true } // Merge to prevent overwriting existing data
    );

    console.log("User profile saved/updated successfully.");
  } catch (error) {
    console.error("Error saving user profile:", error);
    throw error;
  }
};
