import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LanguageSelection from './pages/LanguageSelection';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProviderRegistration from './pages/auth/ProviderRegistration';
import Home from './pages/Home';
import Search from './pages/Search';
import ServiceDetails from './pages/ServiceDetails';
import ProviderProfile from './pages/ProviderProfile';
import ClientChat from './pages/ClientChat';

import Dashboard from './pages/seller/Dashboard';
import Profile from './pages/seller/Profile';
import Services from './pages/seller/Services';
import CreateAd from './pages/seller/CreateAd';
import Orders from './pages/seller/Orders';
import Subscriptions from './pages/seller/Subscriptions';
import SellerReviews from './pages/seller/Reviews';
import Chat from './pages/Chat';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/language" element={<LanguageSelection />} />
        
        {/* Public Routes with Navbar/Footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-provider" element={<ProviderRegistration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/search" element={<Search />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/chat" element={<ClientChat />} />
        </Route>

        {/* Seller Dashboard Routes */}
        <Route path="/seller" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services" element={<Services />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="orders" element={<Orders />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="reviews" element={<SellerReviews />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
