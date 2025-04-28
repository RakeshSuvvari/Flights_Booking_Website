# ✈️ Flights Booking Website

A full-featured Django-based flight booking system where users can search flights, add passenger details, select seats (for both one-way and round-trip journeys), and proceed to payment. This system is designed with simplicity, usability, and scalability in mind.

## 🚀 Features

- 🔍 Search flights (one-way or round-trip)
- 👤 User authentication & session management
- 👨‍👩‍👧 Add multiple passengers dynamically
- 💺 Seat selection (supports two-seat selection for round-trip)
- 💳 Booking summary and fare calculation
- 🔐 User login and authentication
- 📧 Collects user email and mobile during booking
- 🗃️ Admin dashboard for flight and user management
---

## 🧰 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Backend      | Django (Python)        |
| Frontend     | HTML, CSS, Bootstrap   |
| JS Interactivity | Vanilla JS         |
| Database     | SQLite3 (default Django DB) |
| Authentication | Django’s `AbstractUser` model |
| Templating   | Django Templating Engine |

---

## 🗃️ Project Structure

```
Flights_Booking_Website/
├── capstone/               # Core Django app
├── flight/                 # Flight-related functionalities
│   ├── migrations/
│   ├── static/              # CSS, JS
│   ├── templates/flight/    # HTML templates
│   ├── models.py            # DB Models
│   ├── views.py             # Core Views
│   ├── urls.py              # App-level routing
│   └── forms.py             # (if any)
│
├── staticfiles/            # Static assets (CSS, JS, images)
├── templates/              # HTML templates
├── db.sqlite3              # SQLite database
├── manage.py               # Django management script
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation
```

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RakeshSuvvari/Flights_Booking_Website.git
cd Flights_Booking_Website
```

### 2. (Optional) Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Migrations

```bash
python manage.py migrate
```

### 5. (Optional) Create Admin Superuser

```bash
python manage.py createsuperuser
```

### 6. Run Development Server

```bash
python manage.py runserver
```

Go to `http://127.0.0.1:8000` in your browser.

---


## 🙋‍♂️ Author

**Rakesh Suvvari**  
🎓 Graduate Student @ Texas State University  
🔗 [GitHub: RakeshSuvvari](https://github.com/RakeshSuvvari)

---

