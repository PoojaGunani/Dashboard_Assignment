import axios from "axios";
import apiConfigs from "../ApiConfig";
import { toast } from "react-toastify";
export const dataPostHandler = async (endPoint, dataToSend) => {
  try {
    const res = await axios({
      method: "POST",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: dataToSend,
    });
    if (res.data.responseCode === 200) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.responseMessage);
    
    // if (error.response.status === 440) {
    //   window.location.href = "/";
    // }
    return false;
  }
};

export const getDataHandlerAPI = async (endPoint, dataSend) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      params: dataSend,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    return false;
  }
};

export const patchAPIHandler = async (endPoint, dataToSend) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: dataToSend,
    });
    if (res.data.responseCode === 200) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};

export const putAPIHandler = async (endPoint, _id) => {
  console.log(`${apiConfigs[endPoint]}${_id}`)
  console.log(_id)
  try {
    const res = await axios({
      method: "PUT",
      url: `${apiConfigs[endPoint]}?${_id}`,
      headers: {
        token: window.localStorage.getItem("token"),
      },
      // params: id,
      // data: dataToSend,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data?.result;
    } else {
      toast.success(res.responseMessage);
    }
  } catch (error) {
    if (error.response.responseCode === 440) {
      window.location.href = "/";
    }
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};

export const getWithoutDataHandlerAPI = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${apiConfigs[endPoint]}`,
    });
    if (res.data.responseCode === 200) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    return false;
  }
};
export const getAPIHandle = async (endPoint, data) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfigs[endPoint],
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
export const getParticularDataHanndler = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${apiConfigs[endPoint]}/${_id}`,
    });
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    // if (error.response.status === 440) {
    //   window.location.href = "/";
    // }
    return error?.response?.data?.responseMessage;
  }
};

export const getParticularObjectDataHanndler = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${apiConfigs[endPoint]}/?${_id}`,
      headers: {
        token: window.localStorage.getItem("token"),
      },
      // params: _id,
    });
    if (res) {
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    return error?.response?.data?.responseMessage;
  }
};

export const deleteDataAPIHandler = async (endPoint, _id) => {
  try {
  
    const res = await axios({
      method: "DELETE",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      // params: _id,
      data:_id,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    return false;
  }
};
export const deleteDataAPIHandlerForm = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      data: _id,
    });
    if (res.data.responseCode === 200) {
      // toast.success(res.data.responseMessage);
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    return false;
  }
};

export const postAPIHandlerIdInPath = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${apiConfigs[endPoint]}/${_id}`,
      headers: {
        token: window.localStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    if (error.response.status === 440) {
      window.location.href = "/";
    }
    toast.error(error?.response?.data?.responseMessage);
    return false;
  }
};

export const getDataWithoutToken = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfigs[endPoint],
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error");
  }
};

export const postDataIdinQuery = async (endPoint, id) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      params: id,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error");
  }
};
export const postDataIdinQueryWithdata = async (endPoint, id, dataSend) => {
  try {
    const res = await axios({
      method: "POST",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },
      params: id,
      data: dataSend,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error");
  }
};
export const postDataIdinWithdata = async (endPoint, dataSend) => {
  try {
    const res = await axios({
      method: "POST",
      url: apiConfigs[endPoint],
      headers: {
        token: window.localStorage.getItem("token"),
      },

      data: dataSend,
    });
    if (res.data.responseCode === 200) {
      toast.success(res.data.responseMessage);
      return res.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log("error");
  }
};
