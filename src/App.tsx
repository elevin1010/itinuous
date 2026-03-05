import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Investors from "./pages/Investors";
import Creators from "./pages/Creators";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import LogoDownload from "./pages/LogoDownload";
import NotFound from "./pages/NotFound";
import CertificateDemo from "./pages/CertificateDemo";
import CertificateDemo2 from "./pages/CertificateDemo2";
import IndexV2 from "./pages/IndexV2";
import InvestorOneSheet from "./pages/InvestorOneSheet";
import DeckContact from "./pages/DeckContact";
import TalentDeck from "./pages/TalentDeck";
import OgImagePreview from "./pages/OgImagePreview";
import { AppLayout } from "./components/app/AppLayout";
import Overview from "./pages/app/Overview";
import Identities from "./pages/app/Identities";
import Attestations from "./pages/app/Attestations";
import AssetsPage from "./pages/app/Assets";
import PublicProof from "./pages/app/PublicProof";
import Billing from "./pages/app/Billing";
import Security from "./pages/app/Security";
import ActivityPage from "./pages/app/Activity";
import SettingsPage from "./pages/app/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/brief" element={<InvestorOneSheet />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logo" element={<LogoDownload />} />
          <Route path="/certificate" element={<CertificateDemo />} />
          <Route path="/certificate2" element={<CertificateDemo2 />} />
          <Route path="/og-preview" element={<OgImagePreview />} />
          <Route path="/deck/contact" element={<DeckContact />} />
          <Route path="/deck/talent" element={<TalentDeck />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Overview />} />
            <Route path="identities" element={<Identities />} />
            <Route path="attestations" element={<Attestations />} />
            <Route path="assets" element={<AssetsPage />} />
            <Route path="proof" element={<PublicProof />} />
            <Route path="billing" element={<Billing />} />
            <Route path="security" element={<Security />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;