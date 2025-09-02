import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainComponent from "./components/secondComponent/MainComponent";
// import Home from "./components/Home";
import MobileForm from "./components/authPage/MobileForm";
import OTPPage from "./components/authPage/OTPPage";
import SearchBanner from "./components/MainVenuePage/SearchBanner";
import FilterPanel from "./components/MainVenuePage/FilterSection/FilterPanel";
import VenueCards from "./components/MainVenuePage/FilterSection/VenueCards";
import FilterFlex from "./components/MainVenuePage/FilterSection/FilterFlex";
import VenueContainer from "./components/MainVenuePage/VenueSection/VenueContainer";
import AboutPage from "./components/About/AboutPage";
import CategoryFilter from "./components/Category/CategoryFilter";
import VendorDetail from "./components/VendorPages/VendorDetail";
import HomePage from "./components/NewHomepage/Home/HomePage";
import FilterPage from "./components/NewHomepage/Home/FilterPage";
import WhyPlanHere from "./components/NewHomepage/pages/WhyPlanHere";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobile" element={<MobileForm />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/services" element={<AboutPage />} />
        <Route path="/venues" element={<CategoryFilter />} />
        <Route path="/vendor/:vendorName" element={<VendorDetail />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/whyplan" element={<WhyPlanHere />} />
      </Routes>
      {/* <MainComponent />
      <SearchBanner />
      <FilterFlex />
      <VenueContainer /> */}
    </div>
  );
}

export default App;
