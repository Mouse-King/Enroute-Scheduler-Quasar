import {
  signInWithEmailAndPassword,
  auth,
  db,
  getDoc,
  doc,
  setDoc,
  createUserWithEmailAndPassword,
} from "boot/firebase";

import { APP_URL, INITIAL_ACCOUNT_PASSWORD } from "src/config/config";

export const UserAuthenticationAPI = {
  async SignInWithEmailAndPassword(email, password) {
    let message;
    let success;

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (creds) => {
        const userRef = doc(db, "users", creds.user.uid);
        const getUser = await getDoc(userRef);
        const { email, user } = getUser.data();
        console.log(email, user);
        success = true;
      })
      .catch((error) => {
        success = false;
        switch (error.code) {
          case "auth/user-not-found":
            message = "User not found";
            break;
          case "auth/wrong-password":
            message = "Wrong password";
            break;
          case "auth/network-request-failed":
            message = "Poor connection";
          default:
            console.log(error.code);
            break;
        }
        return false;
      });

    return { success, message };
  },

  async CreateUser(user) {
    try {
      let success = false;
      let message = "";

      await createUserWithEmailAndPassword(
        auth,
        user.email,
        INITIAL_ACCOUNT_PASSWORD
      )
        .then(async (_doc) => {
          const _user = _doc.user;
          const userRef = doc(db, "users", _user.uid);

          await setDoc(userRef, {
            email: user.email,
            first_name: user?.fname || "",
            uid: _user.uid,
          });

          /*const res = await this.SendWelcomeEmail(
            user.email,
            user.fname,
            _user.uid
          );*/

          return {
            success: true || res.success,
            message: _user.uid,
          };
        })
        .catch((error) => {
          success = false;
          switch (error.code) {
            case "auth/email-already-in-use":
              message = "Email already in use";
              break;
            default:
              message = error;
              break;
          }
        });
      return {
        success,
        message,
      };
    } catch (e) {
      console.error(e);
      return { success, message: e };
    }
  },

  async SendWelcomeEmail(email, name, uid) {
    //TODO SET PASSWORD PAGE
    const authLink = `https://${APP_URL}/confirm/${email}/${uid}`;
    let success = false;
    let code = 0;
    let message = "";
    //TODO MAKE SEND EMAIL FUNCTION
    try {
      await axios.post(`${BASE_URL}/user/complete`, {
        email,
        name,
        authLink,
      });
      success = true;
    } catch (error) {
      code = error;
      message = error;
      success = false;
    }
    return {
      success,
      code,
      message,
    };
  },

  async GetUserDetails() {
    try {
      const user = localStorage.getItem("user");

      if (user === undefined || user === "")
        return { email: "", first_name: "", uid: "" };

      const { email, first_name, uid } = JSON.parse(user);
      return { email, first_name, uid };
    } catch (e) {
      console.error(e);
      return { email: "", first_name: "", uid: "" };
    }
  },

  ClearLocalStorage() {
    try {
    } catch (e) {
      console.error(e);
    } finally {
    }
  },
};
