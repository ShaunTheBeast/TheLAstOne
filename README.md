# 📱 Pawsitive Pet Academy – Mobile Application (`PawsitiveApp`)

**Tagline:** *Caring for pets. Building confident owners.*  
**Location:** Durban, South Africa  
**Established:** 2023 (Founded by Sarah Smith)  
**Module:** Work-Integrated Learning (XHAW5112) – Task 2 & Task 3 Mobile Deliverable  
**Group:** 3 Peas In a Pod  

---

## 📖 Project Overview

**PawsitiveApp** is the cross-platform React Native mobile application for **Pawsitive Pet Academy**, engineered to provide complete functional and visual parity with the academy's web platform and Figma prototypes. Built for everyday pet owners, kennel staff, veterinary assistants, and aspiring pet entrepreneurs, the app enables users to browse courses by category, build multi-course packages, calculate automated quotations (including tiered discounts and 15% South African VAT), and submit validated admission inquiries directly from their mobile devices.

---

## 👥 Team Members (Group: 3 Peas In a Pod)

| Name | Role | Student Number |
| :--- | :--- | :--- |
| **Israa Williams** | Team Leader & Documentation Lead | `ST10501763` |
| **Shaun Stroebel** | Team Secretary & Lead Frontend/Logic Developer | `ST10507489` |
| **Reginaldo Muriame Gime** | Mobile Application Developer & UX/UI Designer | `ST10535021` |

---

## 🔗 Project Repositories & Links

* **Mobile Application Source Code (GitHub):** <https://github.com/roberto979/PawsitiveApp.git>
* **Website Source Code (GitHub):** <https://github.com/shaunstroebel/PeasInAPod/>
* **High-Fidelity Wireframes (Figma):** <https://canvas-hire-67236687.figma.site/>
* **Group Presentation Video (YouTube Unlisted):** <https://youtube.com/shorts/n5kMxs2PYrc?si=HL-o-tyncoA3EbRI>

---

## ✨ Key Mobile Features & Functionality

* **Bottom Tab Navigation (`App.js`):** Seamless native mobile navigation powered by `@react-navigation/bottom-tabs` connecting **Home**, **Courses**, **Calculator**, **About**, and **Contact** screens.
* **Centralized Course Data (`src/data/coursesData.js`):** Houses the structured `COURSES` array containing all 7 academy courses across both educational tiers (*12-Week Professional Programmes* and *6-Week Short Courses*).
* **Interactive Course Filtering (`ServicesScreen.js`):** Allows users to filter the catalogue dynamically by category (`All`, `Professional Programme`, `Short Course`) and toggle course selections using reusable `CourseCard` components.
* **Real-Time Mobile Fee Calculator (`CalculatorScreen.js`):**
  * Computes subtotals dynamically via `Array.reduce()`.
  * Applies automated volume discounts (**0%** for 1 course, **5%** for 2 courses, **10%** for 3 courses, **15%** for 4+ courses).
  * Calculates **15% South African VAT** on the discounted subtotal and displays a live investment summary card.
* **Client-Side Form Validation (`ContactScreen.js`):** Validates user names, email formats, phone inputs, and minimum inquiry message lengths with native mobile `Alert` feedback.
* **Consistent Brand Identity:** Implements the official Pawsitive Pet Academy colour palette (**Terracotta** `#DA6F43`, **Teal** `#268D81`, **Navy** `#285062`, and **Soft Cream** `#F8F9FA`) across all native `StyleSheet` definitions.

---

## 📂 Mobile Application File Structure

```text
PawsitiveApp/ (Root Mobile Repository)
│
├── App.js                          # Root Entry Point & Bottom Tab Navigator Configuration
├── package.json                    # Project Dependencies & Expo / React Native Scripts
├── README.md                       # Mobile Application Documentation, Architecture & Changelog
│
└── src/
    ├── data/
    │   └── coursesData.js          # Master Course Array (IDs, Names, Durations, Fees, Categories)
    │
    ├── components/
    │   └── CourseCard.js           # Reusable Course UI Card with Brand Styling & Selection State
    │
    └── screens/
        ├── HomeScreen.js           # Welcome Hero Screen, Value Proposition & Quick Navigation
        ├── ServicesScreen.js       # Filterable Course Catalogue (All / Professional / Short Courses)
        ├── CalculatorScreen.js     # Interactive Multi-Course Quote Calculator, Discounts & 15% VAT
        ├── AboutScreen.js          # Institutional History, Founder Bio & Academy Statistics
        └── ContactScreen.js        # Validated Admissions Inquiry Form & Durban Campus Hours
```

---

## 🛠️ Course Offerings & Pricing Matrix

| ID | Course Title | Category | Duration | Tuition Fee |
| :--- | :--- | :--- | :--- | :--- |
| `c1` | **Canine Obedience Training** | Professional Programme | 12 Weeks Professional | R1,500.00 |
| `c2` | **Pet Grooming** | Professional Programme | 12 Weeks Professional | R1,500.00 |
| `c3` | **Animal Behaviour** | Professional Programme | 12 Weeks Professional | R1,500.00 |
| `c4` | **Pet Business Management** | Professional Programme | 12 Weeks Professional | R1,500.00 |
| `c5` | **Puppy Care** | Short Course | 6 Weeks Short Course | R750.00 |
| `c6` | **Pet First Aid** | Short Course | 6 Weeks Short Course | R750.00 |
| `c7` | **Basic Dog Walking** | Short Course | 6 Weeks Short Course | R750.00 |

---

## 📝 Changelog (Mobile App Evolution)

### **[v3.0.0] – Task 3 Full Web-to-Mobile Parity & Logic Synchronization**
* **Added:** Synchronized `src/data/coursesData.js` array structure with the production website (`JS/script.js`) so all course IDs, names, and fees match across platforms.
* **Added:** Real-time multi-course discount calculation (`5%`, `10%`, `15%`) and `15%` South African VAT computation inside `CalculatorScreen.js`.
* **Added:** Category filter pills (`All Courses`, `Professional Programme`, `Short Course`) in `ServicesScreen.js` paired with interactive `CourseCard` selection states.
* **Improved:** Standardized native `StyleSheet` palettes (`#285062` Navy headers, `#DA6F43` Terracotta CTAs, `#268D81` Teal badges, `#F8F9FA` background) to match Figma high-fidelity mockups.

### **[v2.0.0] – Task 2 Core Navigation & Screen Implementation**
* **Added:** Bottom tab navigation bar (`App.js`) linking all 5 primary mobile screens.
* **Added:** Native inquiry form validation and `Alert` confirmation dialogs in `ContactScreen.js`.
* **Added:** Institutional overview and key statistics cards in `AboutScreen.js`.

### **[v1.0.0] – Task 1 Mobile UX Wireframing**
* **Added:** 12 mobile wireframes in Figma establishing touch-friendly card layouts, vertical scrolling, and simplified mobile user flows.

---

## 🚀 Prerequisites & Installation Guide

### **1. Prerequisites**
* [Node.js](https://nodejs.org/) (LTS version recommended)
* [Expo CLI](https://docs.expo.dev/) or React Native environment setup
* **Expo Go** app installed on your iOS or Android device (or an Android Studio / Xcode emulator)

### **2. Installation & Setup**
1. **Clone the mobile repository:**



2. **Navigate into the project directory:**
   ```bash
   cd PawsitiveApp
   ```

3. **Install core dependencies and React Navigation packages:**
   ```bash
   npm install
   npx expo install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
   ```

4. **Start the development server:**
   ```bash
   npx expo start
   ```

5. **Run the application:**
   * Scan the QR code displayed in your terminal using the **Expo Go** app on your phone, or press `a` (Android Emulator) / `i` (iOS Simulator).
