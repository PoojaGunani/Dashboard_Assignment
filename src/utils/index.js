import { Contract } from "@ethersproject/contracts";
import Apiconfigs from "src/apiConfig/ApiConfig";
import axios from "axios";

export function sortAddress(add) {
  const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}

export function sortAddressWallet(add) {
  const sortAdd = `${add?.slice(0, 20)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}

export function sortAddressWalletDeposite(add) {
  const sortAdd = `${add?.slice(0, 40)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export function getContract(address, ABI, library, account) {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
}
export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / ((1000 / 60) * 60 * 24)),
        hours: Math.floor((difference / ((1000 / 60) * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};
export const getCoinImageDatahandler = async (token) => {
  try {
    const res = await axios({
      method: "GET",
      url: Apiconfigs.get_wallet_coinImageData,
    });
    if (res.data.responseCode === 200) {
      return res?.data?.result;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const ExchangeArray = [
  { img: "images/bitmartImg.png", coinName: "Binance" },
  { img: "images/binanaceImg.png", coinName: "Bitmart" },
  { img: "images/mexcImg.png", coinName: "Mexc" },
];
export const handleNegativeValue = (event) => {
  const {
    key,
    target: { value, selectionStart },
  } = event;
  const newValue =
    value.slice(0, selectionStart) + value.slice(selectionStart + 1);
  const parsedValue = parseFloat(newValue);
  if (
    ["ArrowUp", "ArrowDown", "-"].includes(key) &&
    (isNaN(parsedValue) || parsedValue < 0)
  ) {
    event.preventDefault();
  }
};
