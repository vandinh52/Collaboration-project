# Collaboration-project

## HTML code explained

### Emmet:
Used Emmet to quickly generate the basic HTML boilerplate code.

### Title:
Changed the title of the page to "Project 1 - Collaboration" to match the project's purpose.

### CSS and JavaScript:
Linked the external stylesheet ("style.css") within the `<head>` tag to apply styles to the page.
Linked the JavaScript file ("script.js") just before the closing `</body>` tag to add dynamic functionality.

### Div Structure:
Created a main container `<div>` with the class "outer-grid" to house the entire page content.

### Header:
Within the "outer-grid" div, created a `<header>` with the class "header" to contain the top navigation elements.
The header is further divided into two sections: "header__left" and "header__right".

### Mobile Toggle Button and Logo:
In the "header__left" section, added a mobile toggle button represented by a hamburger icon (`<i class="fa-solid fa-bars"></i>`) and a logo placeholder ("LOGO").

### Navigation on the Left:
In the "header__right" section, created a navigation area with the class "header__nav".
Inside the navigation, added two navigation items ("nav-item") with icons and links for "Videos" and "Contact".

### Navbar:
Below the header, created a `<nav>` element with the class "navbar" to contain the main navigation links.
Added three navigation items ("nav-item") with icons and links for "Dashboard", "Messages", and "Settings".

### Inner Grid:
Created a `<div>` with the class "inner-grid" to contain the main content of the page.

### Main Content:
Within the "inner-grid" div, created a `<main>` element with the class "dashboard" to hold the main content.
The main content includes a summary section with four cards displaying different data.

### Aside:
Created an `<aside>` element with the class "aside" to display additional information and quick links.
The aside section contains an "Upcoming Events" section with two event images and a "Quick Links" section with a list of links.

### Footer:
Created a `<footer>` element with the class "footer" to display copyright information.

### Modals:
Included HTML code for four modal windows ("videoModal", "contactModal", "settingModal", and "messageModal") that can be opened and closed dynamically using JavaScript.