import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import {
  Admin_Page,
  Login_Error_Page,
  Member_Login_Page,
  Member_Resources_Pages,
} from "../views";
import { database } from "./firebase/config";
import { ref, onValue } from "@firebase/database";

const PrivateRoute = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);
  const determine_return_page = () => {
    if (currentUser) {
      if (props.page == "Member Resources") {
        return <Member_Resources_Pages />;
      } else if (props.page == "Admin" && admin) {
        return <Admin_Page />;
      }
    } else {
      return <Member_Login_Page />;
    }
  };

  useEffect(() => {
    if (currentUser) {
      const admin_users_ref = ref(
        database,
        "/admin-users/" + currentUser["uid"]
      );
      onValue(admin_users_ref, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data != null) {
          console.log("here");
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      });
    }
  }, [currentUser]);

  return determine_return_page();
};
export default PrivateRoute;
