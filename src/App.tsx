import { useState, useCallback } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import ThreeExperiences from "./components/ThreeExperiences";
import Rooms from "./components/Rooms";
import Dining from "./components/Dining";
import Banquets from "./components/Banquets";
import Gallery from "./components/Gallery";
import VideoExperience from "./components/VideoExperience";
import PlanYourVisit from "./components/PlanYourVisit";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ConciergeChat from "./components/ConciergeChat";
import BookingModal from "./components/BookingModal";
import TableReservationModal from "./components/TableReservationModal";
import EventEnquiryModal from "./components/EventEnquiryModal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>();
  const [reservationOpen, setReservationOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<string | undefined>();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleOpenBooking = (roomName?: string) => {
    setSelectedRoom(roomName);
    setBookingOpen(true);
  };

  const handleOpenReservation = () => {
    setReservationOpen(true);
  };

  const handleOpenEnquiry = (venueName?: string) => {
    setSelectedVenue(venueName);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#11110F] text-[#F4F0E7] selection:bg-[#C6A15B] selection:text-[#11110F] relative">
      {/* Subtle Champagne-Gold Scroll Depth Indicator */}
      <ScrollProgress />

      {/* Luxury Loading Animation Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Transparent / Translucent Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenReservation={handleOpenReservation}
      />

      <main>
        {/* Fullscreen Cinematic Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenReservation={handleOpenReservation}
        />

        {/* Editorial Introduction */}
        <Introduction />

        {/* Three Core Experiences Showcase */}
        <ThreeExperiences />

        {/* Accommodations & Room Cards */}
        <Rooms onOpenBooking={handleOpenBooking} />

        {/* Multi-Cuisine Dining & Interactive Menu */}
        <Dining onOpenReservation={handleOpenReservation} />

        {/* Banquets & Celebrations */}
        <Banquets onOpenEnquiry={handleOpenEnquiry} />

        {/* Asymmetrical Property Gallery & Lightbox */}
        <Gallery />

        {/* Cinematic Video Walkthrough Section */}
        <VideoExperience />

        {/* Plan Your Visit Conversion Triad */}
        <PlanYourVisit
          onOpenBooking={() => handleOpenBooking()}
          onOpenReservation={handleOpenReservation}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* Location & Directions */}
        <Location />

        {/* Minimal Luxury Contact Section */}
        <Contact
          onOpenBooking={() => handleOpenBooking()}
          onOpenReservation={handleOpenReservation}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Speed Dial & Mobile Sticky CTA Bar */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
        onOpenReservation={handleOpenReservation}
      />

      {/* AI Hospitality Concierge Chat */}
      <ConciergeChat
        onOpenBooking={() => handleOpenBooking()}
        onOpenReservation={handleOpenReservation}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Discovery Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultRoomName={selectedRoom}
      />

      {/* Restaurant Table Reservation Modal */}
      <TableReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Event Enquiry Modal */}
      <EventEnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultVenueName={selectedVenue}
      />
    </div>
  );
}
