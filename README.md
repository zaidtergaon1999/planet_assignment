# 🌍 Planet Assignment – Shopper Portal Automation (Playwright + JavaScript)

## 📘 Overview

This project is an **end-to-end automation framework** built for the **Planet Shopper Portal** as part of the technical assignment.  
The main objective of this assignment is to automate the **complete user flow** — from email submission to OTP verification, Terms acceptance, Passport data entry, and profile completion — using **Playwright** with the **Page Object Model (POM)** architecture.

The framework simulates a realistic shopper journey with dynamic data generation, OTP polling from [Mail.tm](https://mail.tm), and robust defensive selectors designed to handle real-world UI variations.

## 🎥 Demo Recording

The entire recording of this UI automation is available in the following video folder:

### 🎬 [Watch Video](src/video/demo.mp4)

This video showcases the complete automated journey — from email submission and OTP verification to passport entry and profile completion — providing a visual confirmation of the framework’s end-to-end execution.

## 🧩 Project Objectives

This assignment was designed to demonstrate:

- ✅ End-to-end automation using **Playwright Test Runner**  
- ✅ Use of **Page Object Model (POM)** for modular, reusable code  
- ✅ Integration with **Mail.tm API** to dynamically fetch OTPs  
- ✅ Robust handling of asynchronous events, animations, and flaky selectors  
- ✅ Clean, readable, and maintainable codebase structure  



## ⚙️ Tools & Technologies Used

| Tool / Library | Purpose |
|------------------------|-------------------------------------------------------|
| **Playwright**         | End-to-end test automation framework                  |
| **Node.js**            | Runtime environment for executing JavaScript          |
| **Mail.tm API**        | Temporary mailbox service for OTP testing             |
| **JavaScript (ES6+)**  | Core programming language used                        |
| **VS Code**            | Development environment                               |
| **POM Design Pattern** | Code organization for scalability and maintainability |



# 💻 Setup Instructions

### 1️⃣ Install Node.js

If Node.js is not installed, download it from the official site:  
👉 [https://nodejs.org/](https://nodejs.org/)

Verify installation:
node -v
npm -v



###  2️⃣ Install Playwright and Project Dependencies

Clone or download the repository, then open it in VS Code.

Run the following commands in the terminal:

### Install project dependencies
  npm install

### Install Playwright browsers (Chromium, Firefox, WebKit)
  npx playwright install


### ▶️ Running the Tests

### Run all tests using:

 npx playwright test


### To run a specific test (e.g., Shopper Portal):

 npx playwright test tests/shopperPortal.spec.js


### To open the Playwright HTML report after execution:

npx playwright show-report




## Test Flow (Step-by-Step) 🧠 

- Create Mail.tm account → Generates disposable email & token

- Submit Email → Opens Shopper Portal & enters email

- Wait for OTP → Polls Mail.tm inbox and auto-fills OTP code

- Accept Terms of Service (TOS) → Checks checkbox and continues

- Scan Passport → Enter Manually → Chooses manual passport entry option

- Enter Passport Details → Random passport number, expiry, and country

- Confirm Passport Details → Clicks “Confirm and Continue”

- Fill Complete Details → Name, nationality, residence, address, phone

- Verify Profile Saved → Waits for “Profile details saved” confirmation





## 📷Debug & Artifacts

The framework captures screenshots (on failure or via saveDebug() methods).

Debug screenshots are saved under the debug-playwright/ or test-results/ directory.

You can inspect them to troubleshoot element visibility or timing issues.




## 🏁 Conclusion

This assignment demonstrates a production-grade Playwright automation framework developed for the Planet Shopper Portal.
It shows deep understanding of:

Web automation best practices

Page Object Model structure

Dynamic data handling and asynchronous flows

Integration with third-party APIs (Mail.tm)

This approach ensures stability, reusability, and scalability for real-world enterprise-grade web automation.





# 👤 Author

Zaid Tergaon
Software Quality Engineer | Playwright | JavaScript | Python | QA & Test Framework Design
