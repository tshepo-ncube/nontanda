import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  runTransaction,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default class DB {
  static firebaseConfig = {
    apiKey: "AIzaSyC-TWCp-jNGYuzdjZbmD4tn5KsOCjgRCWM",
    authDomain: "mindfulmanifesters-bb23e.firebaseapp.com",
    projectId: "mindfulmanifesters-bb23e",
    storageBucket: "mindfulmanifesters-bb23e.appspot.com",
    messagingSenderId: "816933119912",
    appId: "1:816933119912:web:a009d7a035bf3c491c1f9d",
    measurementId: "G-1G8NESR5QL",
  };

  static app = initializeApp(DB.firebaseConfig);
  static db = getFirestore(DB.app);

  static updateVotedField = async () => {
    const userEmail = localStorage.getItem("Email");
    const userRefDoc = doc(DB.db, "users", userEmail);

    try {
      // Fetch the existing document
      const userDoc = await getDoc(userRefDoc);

      if (userDoc.exists()) {
        // Document exists, update the "Voted" field
        await updateDoc(userRefDoc, {
          Voted: true,
        });

        console.log("Document updated successfully");
        localStorage.setItem("Voted", true);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };
  static handleVotedFor = async (candidateData) => {
    const userEmail = localStorage.getItem("Email");
    const userRefDoc = doc(DB.db, "users", userEmail);

    try {
      // Fetch the existing document
      const userDoc = await getDoc(userRefDoc);

      if (userDoc.exists()) {
        // Document exists, update the "Voted" field
        await updateDoc(userRefDoc, {
          CandidateVote: candidateData.id,
        });

        // await setDoc(
        //   userRefDoc,
        //   { CandidateVote: candidateData.id } // Replace 'Voted' with the actual field name in your document
        //   // { merge: true }
        // );

        console.log("Document updated successfully");
        localStorage.setItem("Voted", true);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  static async getCandidates() {
    const candidatesCollection = collection(DB.db, "candidates");
    const candidatesSnapshot = await getDocs(candidatesCollection);

    const newCandidatesArray = [];

    candidatesSnapshot.forEach((doc) => {
      const candidateData = doc.data();
      const candidateId = doc.id; // Access the document ID
      newCandidatesArray.push({ id: candidateId, ...candidateData });
      console.log("Candidate data:", candidateData);
      console.log("Candidate ID:", candidateId);

      //setChosenCandidate(candidateId);
    });

    newCandidatesArray.sort((a, b) => b.Votes - a.Votes);
    //setCandidates(newCandidatesArray);

    //setLoading(false);
    return newCandidatesArray;
  }

  static async getCandidatesGraph(
    setCandidates,
    setChosenCandidate,
    setLoading
  ) {
    const candidatesCollection = collection(DB.db, "candidates");
    const candidatesSnapshot = await getDocs(candidatesCollection);

    const newCandidatesArray = [];

    candidatesSnapshot.forEach((doc) => {
      const candidateData = doc.data();
      const candidateId = doc.id; // Access the document ID
      newCandidatesArray.push({ id: candidateId, ...candidateData });
      console.log("Candidate data:", candidateData);
      console.log("Candidate ID:", candidateId);

      setChosenCandidate(candidateId);
    });

    newCandidatesArray.sort((a, b) => b.Votes - a.Votes);
    setCandidates(newCandidatesArray);

    setLoading(false);
    return newCandidatesArray;
  }

  static caesarCipherEncrypt(inputString, shift) {
    return inputString
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const offset = char.toUpperCase() === char ? 65 : 97;
          return String.fromCharCode(((code - offset + shift) % 26) + offset);
        }
        return char;
      })
      .join("");
  }

  static caesarCipherDecrypt(encryptedString, shift) {
    return DB.caesarCipherEncrypt(encryptedString, -shift);
  }

  static async getUsers(setUsers, setLoading) {
    // Implementation for getting users
    let users = [];
    const usersCollection = collection(DB.db, "users");
    const candidatesSnapshot = await getDocs(usersCollection);

    const newUsersArray = [];

    candidatesSnapshot.forEach((doc) => {
      const userData = doc.data();
      const userID = doc.id; // Access the document ID
      newUsersArray.push({ id: userID, ...userData });
      console.log("User data:", userData);
      console.log("User ID:", userID);
    });

    //setCandidates(newCandidatesArray);
    setUsers(newUsersArray);
    setLoading(false);
    return newUsersArray;
  }

  static async saveUserDetails(user) {
    try {
      const candidateDocRef = doc(DB.db, "users", user.email);
      const candidateDocSnapshot = await getDoc(candidateDocRef);

      if (candidateDocSnapshot.exists()) {
        const candidateData = candidateDocSnapshot.data();
        const candidateId = candidateDocSnapshot.id;

        user = { id: candidateId, ...candidateData };

        console.log("Candidate data:", candidateData);
        console.log("Candidate ID:", candidateId);
        console.log(`from db ${candidateData.Email}`);
        console.log(`from db ${candidateData.Password}`);
        // Check if the entered email and password match
        if (
          email === candidateData.Email &&
          //password === DB.caesarCipherDecrypt(candidateData.Password, 3)
          password === candidateData.Password
        ) {
          // Successful login logic here
          console.log("Login successful!");

          localStorage.setItem("Email", candidateData.Email);
          localStorage.setItem("Name", candidateData.Name);
          localStorage.setItem("Surname", candidateData.Surname);
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("Province", candidateData.Province);
          localStorage.setItem("ID", candidateId);
          localStorage.setItem("Voted", candidateData.Voted);
          localStorage.setItem("Age", candidateData.Age);

          //setError(null); // Clear any previous errors
          //setTab("Vote");
          return { loggedIn: true, Error: "" };
        } else {
          // Display error message for incorrect email/password
          //setError("Invalid email or password");
          console.log("invalid email or pwd");
          return { loggedIn: false, Error: "Invalid email or password" };
        }
      } else {
        console.log("Document not found");
        //setError("User not found");
        return { loggedIn: false, Error: "User does not exist" };
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      //setError("An error occurred during login");
      return { loggedIn: false, Error: "An error occurred during login" };
    }
    // Implementation for login
  }

  static emailExists = async (email) => {
    console.log("DB says...");
    try {
      const candidateDocRef = doc(DB.db, "users", email);
      const candidateDocSnapshot = await getDoc(candidateDocRef);

      if (candidateDocSnapshot.exists()) {
        console.log("DB says email is here");
        return true;
      } else {
        console.log("DB says email Not here");
        return false;
      }
    } catch (error) {
      console.error("Error during checking:", error.message);
      return false;
    }
  };

  static incrementVotesTransaction = async (
    candidate,
    handleVoteClick,

    incrementProvincialTransaction
  ) =>
    // async function incrementVotesTransaction(candidateId)
    {
      const candidateRef = doc(DB.db, "candidates", candidate.id);

      try {
        // Start a transaction
        await runTransaction(DB.db, async (transaction) => {
          // Get the current data of the document
          const docSnapshot = await transaction.get(candidateRef);

          // Check if the document exists
          if (!docSnapshot.exists()) {
            throw new Error("Candidate document does not exist!");
          }

          // Increment the "Votes" field by 1
          const currentVotes = docSnapshot.data().Votes || 0;
          const newVotes = currentVotes + 1;
          const voteObject = new Vote(newVotes);
          console.log(voteObject.toVoteObject());
          // Update the document with the incremented value
          // transaction.update(candidateRef, { Votes: newVotes });
          transaction.update(candidateRef, voteObject.toVoteObject());
        });

        console.log("Transaction successfully committed!");
        handleVoteClick();
        DB.handleVotedFor(candidate);
        DB.incrementProvincialTransaction(
          candidate,
          handleVoteClick,
          DB.handleVotedFor
        );
      } catch (error) {
        console.error("Transaction failed:", error.message);
      }
    };

  static incrementProvincialTransaction = async (
    candidate,
    handleVoteClick,
    handleVotedFor
  ) =>
    // async function incrementVotesTransaction(candidateId)
    {
      const provinceRef = doc(
        DB.db,
        "provincialResults",
        localStorage.getItem("Province")
      );

      try {
        // Start a transaction
        await runTransaction(DB.db, async (transaction) => {
          // Get the current data of the document
          const docSnapshot = await transaction.get(provinceRef);

          // Check if the document exists
          if (!docSnapshot.exists()) {
            throw new Error("Province document does not exist!");
          }

          // Get the current value of the dynamic field
          const dynamicFieldName = candidate.id;
          const currentVotes = docSnapshot.data()[dynamicFieldName] || 0;

          // Increment the value by 1
          const newVotes = currentVotes + 1;

          // Create an object to update the dynamic field
          const updateObject = { [dynamicFieldName]: newVotes };

          // Update the document with the incremented value
          transaction.update(provinceRef, updateObject);
        });

        console.log("Transaction successfully committed!");
        handleVoteClick();
        DB.handleVotedFor(candidate);
      } catch (error) {
        console.error("Transaction failed:", error.message);
      }
    };

  static async setUserDetails(user) {
    // Implementation for user registration

    const docRef = doc(DB.db, "users", "tshepo");

    // Set the data in the document
    const data = {
      CurrentMessages: 15,
      LastMessage: new Date(),
      Name: user.name,
      Plan: "Free",
    };

    //console.log(userObj.toUserObject());
    // Save the document
    await setDoc(docRef, data)
      .then(() => {
        console.log("Document successfully written!");

        return { registeredUser: true, Error: "" };
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
        return { registeredUser: false, Error: error };
      });
  }
}
