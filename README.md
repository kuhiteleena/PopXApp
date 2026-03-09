# PopX App 🚀

A React.js mobile UI project built with Vite, replicating the PopX app design with 4 screens — Welcome, Login, Register, and Account Settings.

---

## 📸 Screenshots

| Welcome | Login | Register | Account Settings |
|---|---|---|---|
| ![Welcome](./screenshots/welcome.png) | ![Login](./screenshots/login.png) | ![Register](./screenshots/register.png) | ![Account](./screenshots/account.png) |

---

## 🛠️ Tech Stack

- **React.js** — UI library
- **Vite** — Fast build tool
- **CSS** — Custom styling (no UI library)

---

## 📁 Project Structure

```
popx-app/
└── src/
    ├── main.jsx                  → Entry point
    ├── App.jsx                   → Page router
    ├── style.css                 → Global styles
    ├── components/
    │   └── PhoneFrame.jsx        → Shared phone wrapper
    └── pages/
        ├── Welcome.jsx           → Screen 1 - Welcome
        ├── Login.jsx             → Screen 2 - Login
        ├── Register.jsx          → Screen 3 - Register
        └── AccountSettings.jsx   → Screen 4 - Account Settings
```

---

## ✨ Features

- ✅ 4 screens — Welcome, Login, Register, Account Settings
- ✅ Form validation on Login and Register
- ✅ Floating label input style
- ✅ Phone number accepts only digits (max 10)
- ✅ Password rules — min 6 chars, 1 uppercase, 1 number
- ✅ Bottom navigation to switch between pages
- ✅ Responsive mobile UI design
- ✅ Clean CSS with no external UI libraries

---

## ✅ Validation Rules

### Login
| Field | Rules |
|---|---|
| Email | Required, valid email format |
| Password | Required, min 6 characters |

### Register
| Field | Rules |
|---|---|
| Full Name | Required, min 3 characters |
| Phone | Required, digits only, exactly 10 digits |
| Email | Required, valid email format |
| Password | Required, min 6 chars, 1 uppercase, 1 number |
| Company | Optional, min 2 characters if filled |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/popx-app.git
cd popx-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🎨 Color Palette

| Color | Hex | Usage |
|---|---|---|
| Purple | `#6C3CE2` | Primary buttons, labels, accents |
| Light Purple | `#D9CFF5` | Secondary button |
| Orange | `#E5A000` | Badge |
| Background | `#F7F8F9` | Page & card background |
| Text | `#1a1a1a` | Headings |
| Subtext | `#888888` | Paragraphs |
| Error | `#FF0000` | Validation errors |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Author

Made with ❤️ by **Your Name**  
GitHub: [@your-username](https://github.com/your-username)
