# Book Tracker 📚

A minimalist personal book database built with **React**, **TypeScript**, and **Tailwind CSS**, powered by a real-time **Firebase Firestore** backend.

---

## ✨ Features

- **Real-Time Sync:** Uses Firestore's `onSnapshot` to instantly reflect additions, deletions, and status toggles across all clients without manual refreshes.
- **Derived-State Filtering:** Instant client-side filtering (**All**, **Read**, **Unread**) with zero extra database queries.
- **Easy Actions:** Toggle reading status and delete books directly from the dashboard card.
- **Modular Add Form:** Simple Material-UI (MUI) modal utilizing uncontrolled forms for lightweight state management.

---

## 🛠️ Setup & Installation

### 1. Install Dependencies

npm install firebase react-icons @mui/material @emotion/react @emotion/styled

### 2. Custom colors Tailwind

Add your custom color palette to tailwind.config.js:

```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#faf7f2', // warm off-white
        'button-background': '#eae3d8',
        'box-background': '#ffffff',
        'primary': '#c0522a', // rust accent
        'primary-light': '#fdf2e9',
        'CTA': '#c0522a',
        'text': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
```

## 📂 Project Structure

- **`api.ts`**: Initializes Firebase, connects to Firestore, and defines asynchronous CRUD/subscription methods (`subscribeToBooks`, `addBook`, `deleteBook`, `changeReadStatus`).
- **`Books.tsx`**: The main dashboard. Subscribes to database changes on mount, manages the client-side active filter state, and renders the book grid.
- **`Popup.tsx`**: Form modal for creating new books, integrated with Material UI `Dialog` and native `FormData`.
