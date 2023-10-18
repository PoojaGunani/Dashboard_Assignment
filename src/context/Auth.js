import React, { createContext, useState, useEffect } from "react";
import Apiconfigs from "src/apiConfig/ApiConfig";
import axios from "axios";
import { calculateTimeLeft } from "src/utils";
import { getDataHandlerAPI } from "src/apiConfig/service";
export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("token", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin() {
  const accessToken = window.localStorage.getItem("token");
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData, setUserData] = useState({});
  const [timeLeft, setTimeLeft] = useState();
  const [endTime, setEndtime] = useState();
  const [connectedExchangeList, setConnectedExchangeList] = useState();
  const [unReadNotification, setUnReadNotification] = useState(0);
  const [notificationListData, setNotificationListData] = useState([]);


  const getUserProfileDatahandler = async (token) => {
    try {
      const res = await axios({
        method: "GET",
        url: Apiconfigs.getProfile,
        headers: {
          token: token,
        },
      });
      if (res.data.responseCode === 200) {
        setUserData(res?.data?.result);
      }
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.responseCode === 401) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokens");
      }
    }
  };
  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token) {
      getUserProfileDatahandler(token);
    } // eslint-disable-next-line
  }, [window.localStorage.getItem("token")]);

  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime * 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const getConnectedExchangeList = async (token) => {
    try {
      const response = await getDataHandlerAPI("connectedExchangeList", token);
      if (response) {
        setConnectedExchangeList(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      // getUserProfileDatahandler(window.localStorage.getItem("token"));
      getConnectedExchangeList(window.localStorage.getItem("token"));
    }
  }, [window.localStorage.getItem("token")]);


  const notificationListHandler = async () => {
    try {
      setNotificationListData([]);
      const res = await axios({
        method: "GET",
        url: Apiconfigs.listNotification,
        headers: {
          token: window.localStorage.getItem("token"),
        },
      });
      if (res.data.responseCode === 200) {
        setNotificationListData(res?.data?.result?.docs);
        setUnReadNotification(res?.data?.result?.unReadCount);
      } else {
        setNotificationListData([]);
      }
    } catch (error) {
      console.log(error);
      setNotificationListData([]);
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      notificationListHandler();
    }
  }, [window.localStorage.getItem("token")]);

  let data = {
    userLoggedIn: isLogin,
    userData,
    timeLeft,
    endTime,
    setEndtime,
    unReadNotification,
    connectedExchangeList,
    getUserProfileDatahandler: getUserProfileDatahandler,
    getConnectedExchangeList: (t) => getConnectedExchangeList(t),
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
