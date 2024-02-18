import React from "react";
import "./Layout.css"; // Import CSS for styling
import xLogo from "../images/x.png"; // Import image for logo
import razorpay from "../images/razorpay.png"; // Import image for logo
import payouts from "../images/payouts_icon.png"; // Import image for logo

import { Box, Text } from "@razorpay/blade/components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Box>
        <div className="sidebar" style={{ background: "#0b102c" }}>
          <div
            className="sidebar__content_collapsed"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <img src={xLogo} width={40} alt="logo" />

            <a href="/">
              <div className="sidebar-menu-icon">
                <img alt="menu" width={30} src={payouts} />
              </div>
            </a>
            <a href="/">
              <div className="sidebar-menu-icon">
                <img alt="menu" width={30} src={payouts} />
              </div>
            </a>
            <a href="/">
              <div className="sidebar-menu-icon">
                <img alt="menu" width={30} src={payouts} />
              </div>
            </a>
            <a href="/">
              <div className="sidebar-menu-icon">
                <img alt="menu" width={30} src={payouts} />
              </div>
            </a>
            <a href="/">
              <div className="sidebar-menu-icon">
                <img alt="menu" width={30} src={payouts} />
              </div>
            </a>
          </div>

          <div
            className="sidebar__content_expanded"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <img src={razorpay} width={250} alt="logo" />

            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Home</Text>
              </div>
            </a>

            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Payouts</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Account Statement</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Contacts</Text>
              </div>
            </a>

            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Vendor Payments</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Tax Payments</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Payout Links</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Payroll</Text>
              </div>
            </a>
            <a href="/">
              <div
                className="sidebar-menu-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  alt="menu"
                  width={30}
                  src={payouts}
                  style={{ marginRight: 10 }}
                />
                <Text>Reports</Text>
              </div>
            </a>
          </div>
        </div>
      </Box>
      <div className="container" style={{ background: "#1d2345" }}>
        <Box>
        <nav class="navbar navbar-expand-lg  text-white">
  <div class="container-fluid">
    <a class="navbar-brand  text-white" href="/">Payouts /</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link active mx-2" href="/">Single</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Bulk</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Tally</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="/">Payout Links</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    

          <Box className="content">
            {/* Main content */}
            {children}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Layout;
