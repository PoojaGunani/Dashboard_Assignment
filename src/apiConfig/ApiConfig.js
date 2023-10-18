// export const baseurl = "http://172.16.1.132:1938/"; //local URL
// export const baseurl = "http://172.16.1.132:1979/"; //local URL
// export const baseurl = "https://node-hummingbot.mobiloitte.io/"; // stagin
// export const baseurl = "https://node-cryptobot.mobiloitte.io/"; // stagin

export const baseurl = "https://nodepune-cexjoseph.mobiloitte.io/"; // staging
// export const baseurl = "https://node.barakskyarbitrage.com/";  //live url
const strategyUrl = "https://nodepune-cexjoseph.mobiloitte.io/api/v1"; // staging 
// const strategyUrl = "https://node.barakskyarbitrage.com/api/v1";
const predictionUrl = "https://nodeprediction.barakskyarbitrage.com/api/v1";
let user = `${baseurl}api/v1/user`;
let admin = `${baseurl}api/v1/admin`;
let staticContent = `${baseurl}api/v1/static`;
let notification = `${baseurl}api/v1/notification`;
// let DirectArb = `${baseurl}api/v1/directArbitrage`;
let IntraArb = `${baseurl}api/v1/intraArbitrage`;
let analytics = `${baseurl}api/v1/analytics`;
let wallet = `${baseurl}api/v1/wallet`;
//let triangularArbitrage = `${baseurl}api/v1/triangularArbitrage`;
let triangularArbitrage = `${baseurl}api/v1/arbitrage`;
let DirectArb = `${baseurl}api/v1/arbitrage`;

let loopArbitrage = `${baseurl}api/v1/loopArbitrage`;


// /triangularArbitrage/filterProfitPaths

const apiConfigs = {
  // -------------------Auth---------------------

  //172.16.1.132:1979

  // user Login
  forgotPassword: `${user}/forgotPassword`,
  changePassword: `${user}/changePassword`,
  login: `${user}/userLogin`,
  verifyOTP: `${user}/verifyOTP`,
  resetPassword: `${user}/resetPassword`,
  resendOTP: `${user}/resendOTP`,
  getProfile: `${user}/getProfile`,
  editProfile: `${user}/editProfile`,
  inviteUser: `${user}/inviteUser`,
  subscriptionPlanList: `${user}/subscriptionPlanList`,
  inviteUserList: `${user}/inviteUserList`,
  inviteUserView: `${user}/inviteUserView`,
  updatePermissions: `${user}/updatePermissions`,
  subscriptionPlanListWithFilter: `${user}/subscriptionPlanListWithFilter`,
  addSubscription: `${user}/addSubscription`,
  editSubscription: `${user}/editSubscription`,
  viewSubscription: `${user}/viewSubscription`,
  blockUnblockSubscriptionPlan: `${user}/blockUnblockSubscriptionPlan`,
  deleteInviteUser: `${user}/deleteInviteUser`,
  blockUnblockInvitedUser: `${user}/blockUnblockInvitedUser`,
  updateCapitalAmount: `${admin}/updateCapitalAmount`,
  getCapitalAmount: `${admin}/getCapitalAmount`,
  userSignup:`${user}/userSignup`,
  //staticContent
  listStaticContent: `${staticContent}/listStaticContent`,
  editStaticContent: `${staticContent}/editStaticContent`,
  viewStaticContent: `${staticContent}/viewStaticContent`,
  faqList: `${staticContent}/faqList`,
  deleteFAQ: `${staticContent}/deleteFAQ`,
  addFAQ: `${staticContent}/addFAQ`,
  editFAQ: `${staticContent}/editFAQ`,
  viewFAQ: `${staticContent}/viewFAQ`,
  signUpEmail: `${user}/signUpEmail`,
  verifyOTPEmail: `${user}/verifyOTPEmail`,
  resendOTPEmail: `${user}/resendOTPEmail`,
  signUpMobileNo: `${user}/signUpMobileNo`,
  verifyOTPMobileNo: `${user}/verifyOTPMobileNo`,
  resendOTPMobileNo: `${user}/resendOTPMobileNo`,
  loginEmail: `${user}/loginEmail`,
  loginMobileNo: `${user}/loginMobileNo`,
  viewMyProfile: `${user}/viewMyProfile`,
  forgotPasswordEmail: `${user}/forgotPasswordEmail`,
  forgotPasswordMobileNo: `${user}/forgotPasswordMobileNo`,

  //notification
  listNotification: `${notification}/listNotification`,
  readNotification: `${notification}/readNotification`,
  clearNotification: `${notification}/clearNotification`,

  //DirectArb
  profitPathsDirectArb: `${DirectArb}/profitPaths`,
  filterProfitPathsDirectArb: `${DirectArb}/filterProfitPaths`,
  autoTradeOnOffDirectArb: `${DirectArb}/autoTradeOnOff`,
  tradeProfitPathsDirectArb: `${DirectArb}/tradeProfitPaths`,
  listPlacedTradeDirectArb: `${DirectArb}/listPlacedTrade`,
  viewPlacedTradeDirectArb: `${DirectArb}/viewPlacedTrade/`,
  activeBlockvPlacedTradeDirectArb: `${DirectArb}/activeBlockvPlacedTrade`,
  deletePlacedTradeDirectArb: `${DirectArb}/deletePlacedTrade`,
  cancelledOrderDirectArb: `${DirectArb}/cancelledOrder/`,

  //IntraArb
  profitPathsIntraArb: `${IntraArb}/profitPaths`,
  filterProfitPathsIntraArb: `${triangularArbitrage}/filterProfitPaths`,
  autoTradeOnOffIntraArb: `${IntraArb}/autoTradeOnOff`,
  tradeProfitPathsIntraArb: `${IntraArb}/tradeProfitPaths`,
  listPlacedTradeIntraArb: `${IntraArb}/listPlacedTrade`,
  viewPlacedTradeIntraArb: `${IntraArb}/viewPlacedTrade/`,
  activeBlockvPlacedTradeIntraArb: `${IntraArb}/activeBlockvPlacedTrade`,
  deletePlacedTradeIntraArb: `${IntraArb}/deletePlacedTrade`,
  cancelledOrderIntraArb: `${IntraArb}/cancelledOrder/`,

  //analytics
  arbitrageData: `${analytics}/arbitrageData`,
  tradingDetails: `${analytics}/tradingDetails`,
  tradingView: `${analytics}/tradingView`,

  //wallet
  connectedExchangeList: `${wallet}/connectedExchangeList`,
  exchangeBalance: `${wallet}/exchangeBalance`,
  listExchange: `${wallet}/listExchange`,
  serverIPAddress: `${wallet}/serverIPAddress`,
  connectExchange: `${wallet}/connectExchange`,
  exchangeCoins: `${wallet}/exchangeCoins`,
  removeConnectedExchange: `${wallet}/removeConnectedExchange`,
  asks_bids_prices: `${wallet}/asks_bids_prices`,
  mexcPairList: `${wallet}/mexcPairList`,
  generateAddress: `${wallet}/generateAddress`,
  getWithdrawAddress: `${wallet}/getWithdrawAddress`,
  exchangeBalance: `${wallet}/exchangeBalance`,
  deposit: `${wallet}/deposit`,
  withdraw: `${wallet}/withdraw`,
  withdrawDetails: `${wallet}/withdrawDetails`,
  withdrawHistory: `${wallet}/withdrawHistoryy`,
  Dashboard: `${wallet}/Dashboard`,
  withdrawDepositeHistory: `${wallet}/withdrawDepositeHistory`,
  transationHistory: `${wallet}/transationHistory`,
  statistic: `${wallet}/statistic`,
  get_wallet_coinImageData: `${wallet}/coinImageData`,


  //Prediction
  participate: `${predictionUrl}/pool/participate`,
  leaderboard: `${predictionUrl}/pool/get-leader-board`,
  grtPredictionHistory: `${predictionUrl}/pool/get-my-prediction-history`,
  grtPredictionData: `${predictionUrl}/pool/get-my-prediction-revenu`,

  //Martingale
  getBotData: `${strategyUrl}/martingale/strategyBotList`,
  getTradeConfiguration: `${strategyUrl}/martingale/getTradeConfiguration`,
  marginConfiguration: `${strategyUrl}/martingale/getMarginConfiguration`,
  DistributedAndTakeProfitAllocation: `${strategyUrl}/martingale/getDistributedAndTakeProfitAllocation`,
  setMartingaleConfiguration: `${strategyUrl}/martingale/setMartingaleConfiguration`,
  startStopMartingale: `${strategyUrl}/martingale/startStopMartingale`,
  martingaleRunningList: `${strategyUrl}/martingale/getMartingaleRunningList`,
  ordersTransactions: `${strategyUrl}/martingale/getOrdersTransactions`,
  ordersLog: `${strategyUrl}/martingale/getMartingaleLogs`,
  closeMartingale: `${strategyUrl}/martingale/closeMartingale`,


  //Triangular

  filterProfitPathsTriangular: `${triangularArbitrage}/filterProfitPaths`,
  filterProfitPathsTriangularGo: `${triangularArbitrage}/filterProfitPaths`,
  tradeProfitPathsTriangular: `${triangularArbitrage}/tradeProfitPaths`,
  listPlacedTradeTriangular: `${triangularArbitrage}/listPlacedTrade`,
  viewPlacedTradeTriangular: `${triangularArbitrage}/viewPlacedTrade`,
  activeBlockvPlacedTradeTriangular: `${triangularArbitrage}/activeBlockPlacedTrade`,
  deletePlacedTradeTriangular: `${triangularArbitrage}/deletePlacedTrade`,
  cancelledOrderTriangular: `${triangularArbitrage}/cancelledOrder`,
  autoTradeOnOffTriangular: `${triangularArbitrage}/autoTradeOnOff`,

  //Loop Arbitrage
  filterProfitPathsLoop: `${loopArbitrage}/filterProfitPaths`,
  listPlacedTradeLoop: `${loopArbitrage}/listPlacedTrade`,
  tradeProfitPathsLoop: `${loopArbitrage}/tradeProfitPaths`,
  viewPlacedTradeLoop: `${loopArbitrage}/viewPlacedTrade`,
  activeBlockPlacedTradeLoop: `${loopArbitrage}/activeBlockvPlacedTrade`,
  cancelledOrderLoop: `${loopArbitrage}/cancelledOrder`,
  deletePlacedTradeLoop: `${loopArbitrage}/deletePlacedTrade`,
  autoTradeOnOffLoop: `${loopArbitrage}/autoTradeOnOff`,
};
export default apiConfigs;
