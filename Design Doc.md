# 🧩 Design Doc

**Project Name:** Auto-fill Application

**Author:** Tanzil Ehsan

**Date:** December 4, 2025 

**Status:** Final

---

## 1. Auto-Fill-Application

---

## 2. Overview / Problem Statement

A Chrome extension that allows a user to store multiple sets of personal and job-related information — called *profiles* — and use them to auto-fill job application forms on various websites.

It helps users save time and reduce repetitive data entry by detecting form fields and filling them automatically with one click.

When the user clicks the extension icon, they are redirected to a **profile management page** where they can create, edit, and delete profiles.

When a job form page is fully loaded, a **popup UI** appears, allowing the user to choose which profile to use for auto-fill.

---

## 3. Goals

- Allow a single user to create multiple local profiles.
- Each profile stores personal details, education, job experience, and checkboxes (race, military, disability).
- Allow user to edit and delete profiles.
- Allow user to select a profile for auto-fill on a job form page.
- Detect when a job form page has fully loaded.
- Show a popup UI prompting user to select a profile.
- Fill the form fields automatically using the selected profile.
- Keep all data secure and stored locally in Chrome Storage Sync.

---

## 4. Core Features

- **Profile Management Page:** Dedicated page for creating, editing, and deleting profiles.
- **Popup UI:** Appears after job form page loads, allowing user to select a profile for auto-fill.
- **Auto-fill Logic:** Content script automatically detects input fields and fills them using the chosen profile.
- **Chrome Storage Sync:** Store all profile data locally using Chrome’s built-in sync storage.

---

## 5. High-Level Design

### Architecture Overview

The Auto-fill Application consists of four main parts working together inside the Chrome Extension environment:

1. **Profile Management Page (Angular App)**
    - Opens when the user clicks the extension icon.
    - Allows full CRUD operations for multiple profiles.
    - Profiles are stored using Chrome Storage Sync.
2. **Popup UI (Selection Window)**
    - Appears after a job form page finishes loading.
    - Lists all available profiles.
    - User selects one, and the content script fills the form.
3. **Content Script (Auto-fill Engine)**
    - Runs on job application pages.
    - Waits until the DOM is fully loaded.
    - Displays popup UI for profile selection.
    - Fills input fields based on the selected profile.
4. **Background Script**
    - Handles communication between popup, content script, and storage.
    - Manages which profile is selected during the current session.

---

## 6. Implementation

### Components

1. **Profile Management Page**
    - Built with Angular + TailwindCSS.
    - Handles Create, Edit, Delete, and View operations for multiple profiles.
    - Stores profiles in Chrome Storage Sync.
2. **Popup UI (on job sites)**
    - Simple interface showing a dropdown list of saved profiles.
    - A button to verify if the selected profile’s information can be used on this page
    - A button to sends a message to the content script to trigger auto-fill, once verified
3. **Content Script**
    - Detects job application pages.
    - Receives selected profile data and fills corresponding input fields (name, email, phone, etc.).
4. **Background Script**
    - Mediates communication between storage, popup, and content script.
    - Keeps track of the selected profile for the current session.

> Note: The Chrome extension manifest will define permissions, content scripts, popup page, and background script.
> 

---

## 7. Data Model

**Profile Object Structure**

```json
{
  "id": "",
  "profileName": "",
  "personal information": {
  "firstName": "",
  "lastName": "",
  "email": "",
  "phone": "",
  "streetAddress": "",
  "city": "",
  "state": "",
  "zipCode": "",
  "linkedInUrl": "",
  "githubUrl": "",
  "portfolioUrl": ""
  },
  "education": {
    "school": "",
    "degree": "",
    "major": "",
    "startDate": "YYYY-MM-DD",
    "endDate": "YYYY-MM-DD",
    "currentlyAttending": true
  },
  "job": {
    "job_id_1": {
      "companyName": "",
      "jobTitle": "",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "currentlyRole": true
    }
  }
}

```

---

## 8. Risks / Unknowns

- How consistent are job form field names across sites?
- Best detection method for loaded pages (e.g., MutationObserver).
- How to handle multi-step or embedded forms (iframes).

---

## 9. Milestones / Phases

### **Phase 1 — Setup & Profile Management Page (MVP)**

Build the base extension.

- Setup Angular + Manifest v3 environment.
- Build profile management page with CRUD operations.
- Save and retrieve data from Chrome Storage Sync.
- Test local data persistence.

### **Phase 2 — Popup & Field Detection**

Create the on-page popup.

- Add content script and background script.
- Detect job application pages after full load.
- Show popup when a form is detected.
- Display list of profiles.

### **Phase 3 — Auto-fill Integration**

Connect everything together.

- Send selected profile data to content script.
- Implement field-matching logic (by `name`, `id`, `placeholder`).
- Fill fields and highlight them visually.

### **Phase 4 — Polish & Usability**

Improve user flow and reliability.

- Handle edge cases like slow-loading or multi-step forms.
- Polish popup UI and add icons.
- Prepare for Chrome Web Store deployment.

---

## 10. Testing Plan

- Manual testing on common job sites (LinkedIn, Indeed, Greenhouse).
- Test Chrome Storage Sync persistence.
- Test multiple profiles and profile selection logic.
- Confirm popup appears only after page fully loads.
- Use console logging to verify auto-fill correctness.

---

## 11. Future Ideas

- Resume parsing to auto-create profiles.
- AI-assisted field matching for unknown layouts.
- Import/export profiles as JSON.
- Sync profiles between devices (optional in future).
