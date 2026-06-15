# ScrewX - Classic Games with User Authentication

A modern gaming platform with user registration, login, and profile management. Track your scores and compete with yourself!

## 🎮 Features

### Authentication System
- ✅ User Registration with validation
- ✅ Secure Login system
- ✅ Password encryption (bcrypt)
- ✅ Session management
- ✅ User profiles with game statistics
- ✅ Logout functionality

### Games
- ✅ **Snake** - Fully functional with score saving
- ✅ **Tic-Tac-Toe** - Fully functional
- 🚧 **Sudoku** - Coming soon
- 🚧 **Memory Match** - Coming soon
- 🚧 **2048** - Coming soon
- 🚧 **Minesweeper** - Coming soon

### Features
- Track high scores per user per game
- View all your game statistics on profile page
- Modern dark theme UI
- Fully responsive design
- Real-time form validation

## 📋 Requirements

- PHP 7.4 or higher
- MySQL 5.7 or higher (or MariaDB)
- Web server (Apache/Nginx) or PHP built-in server

## 🚀 Installation

### Method 1: Using PHP Built-in Server (Easiest)

1. **Extract/Clone the project**
```bash
cd screwx-website
```

2. **Configure Database** (Optional - auto-creates)
   - Database will be created automatically on first run
   - Default settings in `includes/db.php`:
     - Host: localhost
     - User: root
     - Password: (empty)
     - Database: screwx_db

3. **Start PHP Server**
```bash
php -S localhost:8000
```

4. **Open in Browser**
```
http://localhost:8000
```

### Method 2: Using XAMPP/WAMP/MAMP

**For Windows (XAMPP):**

1. Download and install XAMPP from https://www.apachefriends.org/
2. Copy project folder to `C:\xampp\htdocs\screwx`
3. Start Apache and MySQL from XAMPP Control Panel
4. Open browser: `http://localhost/screwx`

**For Mac (MAMP):**

1. Download and install MAMP from https://www.mamp.info/
2. Copy project to `/Applications/MAMP/htdocs/screwx`
3. Start MAMP servers
4. Open browser: `http://localhost:8888/screwx`

### Method 3: Using Docker (Advanced)

1. Create `docker-compose.yml`:
```yaml
version: '3'
services:
  php:
    image: php:8.1-apache
    ports:
      - "8000:80"
    volumes:
      - .:/var/www/html
    depends_on:
      - mysql
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: screwx_db
    ports:
      - "3306:3306"
```

2. Run:
```bash
docker-compose up
```

## 📁 File Structure

```
screwx-website/
├── index.php              # Home page
├── login.php             # Login page
├── register.php          # Registration page
├── logout.php            # Logout handler
├── profile.php           # User profile page
├── includes/
│   ├── db.php           # Database configuration
│   ├── header.php       # Common header
│   └── footer.php       # Common footer
├── css/
│   └── styles.css       # All styles
├── js/
│   └── script.js        # Interactive features
├── games/
│   ├── snake.php        # Snake game
│   ├── tictactoe.php    # Tic-Tac-Toe game
│   ├── sudoku.php       # Sudoku (placeholder)
│   ├── memory.php       # Memory Match (placeholder)
│   ├── 2048.php         # 2048 (placeholder)
│   └── minesweeper.php  # Minesweeper (placeholder)
└── README.md
```

## 🗄️ Database Schema

The database is auto-created with these tables:

### users
- `id` - INT (Primary Key, Auto Increment)
- `username` - VARCHAR(50) UNIQUE
- `email` - VARCHAR(100) UNIQUE
- `password` - VARCHAR(255) (hashed)
- `created_at` - TIMESTAMP

### game_scores
- `id` - INT (Primary Key, Auto Increment)
- `user_id` - INT (Foreign Key → users.id)
- `game_name` - VARCHAR(50)
- `score` - INT
- `created_at` - TIMESTAMP

## 🎯 Usage Guide

### 1. Register an Account
- Click "Register" in navigation
- Fill in username, email, and password
- Password must be at least 6 characters
- Username must be at least 3 characters
- Email must be valid format

### 2. Login
- Click "Login" in navigation
- Enter username/email and password
- You'll be redirected to home page

### 3. Play Games
- Click on any game card
- Games require login to play
- Scores are automatically saved
- Check your profile to see all stats

### 4. View Profile
- Click "Profile" in navigation
- See all your high scores
- View games played count
- Track your progress

### 5. Logout
- Click "Logout" in navigation
- Session will be destroyed
- Redirected to home page

## 🔧 Configuration

### Changing Database Credentials

Edit `includes/db.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_user');
define('DB_PASS', 'your_password');
define('DB_NAME', 'screwx_db');
```

### Customizing Colors

Edit `css/styles.css`:

```css
/* Main colors */
background-color: #0a0a0a;  /* Dark background */
color: #ffffff;              /* Text color */
#00ff88;                     /* Primary green */
#ff4757;                     /* Danger red */
```

## 🔐 Security Features

- ✅ Password hashing using PHP's `password_hash()`
- ✅ SQL injection protection with prepared statements
- ✅ XSS protection with `htmlspecialchars()`
- ✅ Session-based authentication
- ✅ Input validation on both client and server
- ✅ CSRF protection ready (can be enhanced)

## 🐛 Troubleshooting

### Database Connection Error
```
Solution: Check MySQL is running and credentials are correct
- XAMPP: Start MySQL from control panel
- Command: mysql -u root -p (test connection)
```

### Blank Page After Login
```
Solution: Check PHP error reporting
Add to top of index.php:
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

### Sessions Not Working
```
Solution: Check session directory permissions
- PHP needs write access to session directory
- Check php.ini session.save_path
```

### CSS/JS Not Loading
```
Solution: Check file paths
- Use absolute paths: /css/styles.css
- Verify files exist in correct directories
- Check browser console for 404 errors
```

## 🎨 Customization Tips

### Add New Game

1. Create `games/newgame.php`
2. Include authentication check:
```php
<?php
require_once '../includes/db.php';
if (!isLoggedIn()) {
    header('Location: ../login.php');
    exit();
}
```

3. Add game card to `index.php`
4. Save scores using:
```php
saveGameScore($user['id'], 'gamename', $score);
```

### Change Theme Colors

Modify CSS variables for quick theme change:
- Background: `#0a0a0a`
- Primary: `#00ff88`
- Danger: `#ff4757`
- Text: `#ffffff`
- Muted: `#999999`

## 📱 Mobile Support

The site is fully responsive:
- ✅ Touch-friendly buttons
- ✅ Responsive navigation
- ✅ Mobile-optimized game controls
- ✅ Adaptive layouts

## 🚀 Performance Tips

1. **Enable PHP OPcache** (php.ini):
```ini
opcache.enable=1
opcache.memory_consumption=128
```

2. **Use CDN for production**
3. **Minify CSS/JS**
4. **Enable GZIP compression**

## 📈 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social media login (OAuth)
- [ ] Global leaderboards
- [ ] Friend system
- [ ] Achievements/badges
- [ ] Game challenges
- [ ] Real-time multiplayer
- [ ] Mobile app version

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

MIT License - Free to use and modify

## 💡 Tips

- Test on localhost before deploying
- Regular database backups
- Use strong passwords in production
- Enable HTTPS in production
- Keep PHP and MySQL updated

## 🆘 Support

For issues:
1. Check this README
2. Verify PHP/MySQL versions
3. Check error logs
4. Test database connection
5. Verify file permissions

---

**Happy Gaming! 🎮**
