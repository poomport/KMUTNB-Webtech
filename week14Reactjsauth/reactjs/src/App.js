import auth from "./firebase_config";
import {
  signInWithPopup, GoogleAuthProvider,
  signOut
} from "firebase/auth";
import { useState, useEffect } from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";
import Student from "./components/Student";
import CEDForm from "./components/CEDForm";
import Menu from "./components/Menu";
const App = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) { // User is logged in
        //console.log("onAuth", user);
        setUserInfo(user);
      }
      else {  //  User is not logged in
        setUserInfo(null);
      }
    })
  }, []); // dependency,[], Run Only on the first render
  const login = () => {
    const provider = new GoogleAuthProvider();
    auth.languageCode = 'th';
    //auth.useDeviceLanguage();
    signInWithPopup(auth, provider)
      .then((result) => {
        //console.log(result.user);//We don’t really do it
      }).catch((error) => {
        window.alert(error);
      });
  }
  const logout = () => {
    signOut(auth).then(() => {
      window.alert("You have been logged out!!!")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }


  return (
    <div className="container">
      <br /><BrowserRouter>
        <Header user={userInfo} login={login} logout={logout} /><br /><br />
        <Menu />
        <Routes>
          <Route path='/' element={<Home user={userInfo} />} />
          <Route path='/student' element={<Student user={userInfo} />} />
          <Route path='/cedform' element={<CEDForm user={userInfo} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;