import React from "react";
import { Routes,Route} from "react-router-dom";
import BookingProcess from "./Tabs/Showroom/BookingProcess";
import AutoFinance from "./Tabs/Showroom/AutoFinance";
import ToyotaSure from "./Tabs/Showroom/ToyotaSure";
import PeriodicMaintenance from "./Tabs/Services/PeriodicMaintenance";
import ExpressMaintenance from  "./Tabs/Services/ExpressMaintenance"; 
import GeneralRepair from "./Tabs/Services/GeneralRepair";
import MobileService  from "./Tabs/Services/MobileService";
import OnlineAppointment from "./Tabs/Services/OnlineAppointment";
import Warranty from "./Tabs/Services/Warrenty";
import ExtendedWarranty from "./Tabs/Services/ExtendedWarranty";
import CampaignsPromotions from "./Tabs/Services/CampaignsPromotions";
import BodyPaintService from "./Tabs/Services/BodyPaintService";

import ProductCorollaX from "./Tabs/Showroom/ProductCorollaX";
import AutoRepairServiceDetail from "./Tabs/Services/AutoRepairServiceDetail";

////GenuineParts
import GenuineParts from "./Tabs/Parts/GenuineParts";
import Accessories from "./Tabs/Parts/Accessories";
import PartsForm from  "./Tabs/Parts/PartsForm";
//////CustomrRelations
import CRActivities from "./Tabs/CustomerRelations/CRActivities";
import CROnlineAppointment from "./Tabs/CustomerRelations/CROnlineAppointment";
import OnlineComplaints from "./Tabs/CustomerRelations/OnlineComplaints";
import Loyalty from "./Tabs/CustomerRelations/Loyalty";
import Care from "./Tabs/CustomerRelations/Care";
import CheckVehicleHistory from "./Tabs/CustomerRelations/CheckVehicleHistory";
import CustomerComment from "./Tabs/CustomerRelations/CustomerComment";
import Faqs from "./Tabs/CustomerRelations/Faqs";
import AboutUs from "./Tabs/CustomerRelations/AboutUs"

///////Insurance 
import Insurance  from "./Tabs/Insurance/Insurance";
import ApplyNow from "./Tabs/Insurance/ApplyNow";

////career Tab
import Career from "./Tabs/Career/Career";
import ToyotaContact from "./Tabs/Career/ToyotaContact";
import EventNews from "./Tabs/Career/EventNews";
import ActivitiesCampaings from "./Tabs/Career/ActivitiesCampaings";
import GetInTouch from "./Tabs/Career/GetInTouch";
import Blog from "./Tabs/Career/Blog";
import Blog2 from "./Tabs/Career/Blog2";
import Blog3 from "./Tabs/Career/Blog3";
import PrivacyPolicy  from "./Tabs/Career/PrivacyPolicy";
import TermsConditions from "./Tabs/Career/TermsConditions";
import CompanyProfile from "./Tabs/Career/CompanyProfile";

//import Layout from "./layouts/layout"; // Add this import
import Home from "./Tabs/Home";
const App = () => {

  return (
    <> 
 <Routes>
 /////Home Tab
<Route path="/" element={<Home/>}/>

/////Showroom
 <Route path="/BookingProcess" element={<BookingProcess/>}/>
 <Route path="/AutoFinance" element={<AutoFinance/>}/>
 <Route path="/ToyotaSure" element={<ToyotaSure/>}/>
 <Route path="/CampaignsPromotions" element={<CampaignsPromotions/>}/>
 <Route path="/product/:id" element={<ProductCorollaX/>}/>


/////Services
<Route path="/PeriodicMaintenance" element={<PeriodicMaintenance/>}/>
<Route path="/ExpressMaintenance" element={<ExpressMaintenance/>}/>
<Route path="/GeneralRepair" element={<GeneralRepair/>}/>
<Route path="/MobileService" element={<MobileService />}/>
<Route path="/OnlineAppointment" element={<OnlineAppointment />}/>
<Route path="/Warranty" element={<Warranty />}/>
<Route path="/ExtendedWarranty" element={<ExtendedWarranty />} />
<Route path="/CampaignsPromotions" element={<CampaignsPromotions />}/>
<Route path="/CampaignsandPromotions" element={<CampaignsPromotions />}/>
<Route path="/BodyPaintService" element={<BodyPaintService />}/>
<Route path="/AutoRepairServiceDetail" element={<AutoRepairServiceDetail />}/>


///////GenuineParts
<Route path="/GenuineParts" element={<GenuineParts />}/>
<Route path="/Accessories" element={<Accessories />}/>
{/*<Route path="/PartsForm" element={<PartsForm />}/>*/}
//////CustomerRelations
<Route path="/CRActivities" element={<CRActivities />}/>
<Route path="/CROnlineAppointment" element={<CROnlineAppointment />}/>
<Route path="/OnlineComplaints" element={<OnlineComplaints/>}/>
<Route path="/Loyalty" element={<Loyalty/>}/>
<Route path="/Care" element={<Care/>}/>
<Route path="/CheckVehicleHistory" element={<CheckVehicleHistory/>}/>
<Route path="/CustomerComment" element={<CustomerComment/>}/>
<Route path="/Faqs" element={<Faqs/>}/>
<Route path="/AboutUs" element={<AboutUs/>}/>
<Route path="/Insurance" element={<Insurance/>}/>
<Route path="/ApplyNow" element={<ApplyNow/>}/>
<Route path="/Career" element={<Career/>}/>
<Route path="/ToyotaContact" element={<ToyotaContact/>}/>
<Route path="/EventNews" element={<EventNews/>}/>
<Route path="/ActivitiesCampaings" element={<ActivitiesCampaings/>}/>
<Route path="/GetInTouch" element={<GetInTouch/>}/>
<Route path="/Blog" element={<Blog/>}/>
<Route path="/Blog2" element={<Blog2/>}/>
<Route path="/Blog3" element={<Blog3/>}/>
<Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
<Route path="/TermsConditions" element={<TermsConditions/>}/>
<Route path="/CompanyProfile" element={<CompanyProfile/>}/>


</Routes>
 
    </>
  );
};

export default App;
