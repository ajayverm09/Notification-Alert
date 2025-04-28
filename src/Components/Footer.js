import React from "react";
import Logo from "./Logo.png"
function Footer() {
  return (
    <div style={{ background: "gray", padding: "40px 0", textAlign: "center" }}>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
        <h2 style={{ fontWeight: "bold" }}>For better experience, download the Foodie Hub app now</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="Google Play"
            style={{ height: "50px", cursor: "pointer" }}
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="App Store"
            style={{ height: "50px", cursor: "pointer" }}
          />
        </div>
      </div>

      
      <div style={{ display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
       
        <div style={{ textAlign: "left" }}>
          <img src={Logo} alt=" Logo" style={{ height: "100px", width:"100px" }} />
          <p style={{cursor: "pointer" }}>© 2025 Foodie Hub Limited</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Company</h3>
          <p style={{cursor: "pointer" }}>About Us</p>
          <p style={{cursor: "pointer" }}>Foodie Hub Corporate</p>
          <p style={{cursor: "pointer" }}>Careers</p>
          <p style={{cursor: "pointer" }}>Team</p>
          <p style={{cursor: "pointer" }}>Foodie Hub One</p>
          <p style={{cursor: "pointer" }}>Foodie Hub Instamart</p>
          <p style={{cursor: "pointer" }}>Foodie Hub Dineout</p>
          <p style={{cursor: "pointer" }}>Foodie Hub Genie</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Contact us</h3>
          <p style={{cursor: "pointer" }}>Help & Support</p>
          <p style={{cursor: "pointer" }}>Partner with us</p>
          <p style={{cursor: "pointer" }}>Ride with us</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Available in:</h3>
          <p style={{cursor: "pointer" }}>Bangalore</p>
          <p style={{cursor: "pointer" }}>Gurgaon</p>
          <p style={{cursor: "pointer" }}>Hyderabad</p>
          <p style={{cursor: "pointer" }}>Delhi</p>
          <p style={{cursor: "pointer" }}>Mumbai</p>
          <p style={{cursor: "pointer" }}>Pune</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Life at Foodie Hub</h3>
          <p style={{cursor: "pointer" }}>Explore with Foodie Hub</p>
          <p style={{cursor: "pointer" }}>Foodie Hub News</p>
          <p style={{cursor: "pointer" }}>Snackables</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Legal</h3>
          <p style={{cursor: "pointer" }}>Terms & Conditions</p>
          <p style={{cursor: "pointer" }}>Cookie Policy</p>
          <p style={{cursor: "pointer" }}>Privacy Policy</p>
          <p style={{cursor: "pointer" }}>Investor Relations</p>
        </div>

        <div>
          <h3 style={{cursor: "pointer" }}>Social Links</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" style={{ width: "20px", cursor: "pointer" }} />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: "20px", cursor: "pointer" }} />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: "20px", cursor: "pointer" }} />
            <img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="Pinterest" style={{ width: "20px", cursor: "pointer" }} />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" style={{ width: "20px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;