<template>
    <div class="landing-page">
      <header class="header">
        <nav class="navbar">
          <div class="container">
            <a class="logo" href="#">TaskManager</a>
            <ul class="nav-menu">
             <router-link to="/login">  <li>  <a href="#features">Login</a> </li> </router-link>
             <router-link to="/signup">  <li>  <a href="#features">Sign Up</a> </li> </router-link>
            </ul>
          </div>
        </nav>
      </header>
  
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Effortless Task Management</h1>
            <p>Manage your tasks with ease using TaskManager. Stay organized and boost your productivity.</p>
    
          </div>
          <div class="hero-image">
            <img src="https://img.freepik.com/free-psd/3d-rendering-graphic-design-element_23-2149412223.jpg?t=st=1694376082~exp=1694376682~hmac=0322668ca57892418f4d04442e04a29fa82e78db31682092f6bf8bc3e7b944ec" alt="Task Management Illustration">
          </div>
        </div>
      </section>
  
      <section class="features" id="features">
        <div class="container">
          <h2>Features</h2>
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-tasks"></i>
            </div>
            <div class="feature-text">
              <h3>Task Organization</h3>
              <p>Organize your tasks into projects, categories, and priorities for better management.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-calendar"></i>
            </div>
            <div class="feature-text">
              <h3>Due Date Reminders</h3>
              <p>Set due dates for your tasks and receive reminders to stay on track.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="feature-text">
              <h3>Performance Analytics</h3>
              <p>Track your task completion rate and analyze your productivity over time.</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="pricing" id="pricing">
        <div class="container">
          <h2>Pricing</h2>
          <div class="pricing-plans">
            <!-- Include your pricing plans here -->
          </div>
        </div>
      </section>
  
      <section class="contact" id="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us.</p>
          <a href="mailto:contact@taskmanager.com" class="cta-button primary">Email Us</a>
        </div>
      </section>
  
      <footer class="footer">
        <div class="container">
          <p>&copy; 2023 TaskManager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  /* Reset some default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Header styles */
  .header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
  
  .nav-menu {
    list-style: none;
    display: flex;
  }
  
  .nav-menu li {
    margin-right: 20px;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-menu a:hover {
    color: #333;
  }
  
  /* Hero Section styles */
  
  img{
    height: 80vh;
    width: 50vw;
  }
  .hero {
    background-color: #007BFF;
    color: #ffffff;
    padding: 100px 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 18px;
    margin-bottom: 40px;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
  }
  
  .cta-button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .cta-button.primary {
    background-color: #ff5722;
    color: #ffffff;
  }
  
  .cta-button.primary:hover {
    background-color: #e64a19;
  }
  
  .cta-button.secondary {
    background-color: transparent;
    border: 2px solid #ffffff;
    color: #ffffff;
  }
  
  .cta-button.secondary:hover {
    background-color: #ffffff;
    color: #333;
  }
  
  /* Features Section styles */
  .features {
    background-color: #ffffff;
    padding: 80px 0;
    text-align: center;
  }
  
  .features h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .feature {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .feature-icon {
    font-size: 40px;
    margin-right: 20px;
    color: #007BFF;
  }
  
  .feature-text h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .feature-text p {
    font-size: 18px;
    color: #555;
  }
  
  /* Pricing Section styles */
  .pricing {
    background-color: #f8f8f8;
    padding: 80px 0;
    text-align: center;
  }
  
  .pricing h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  /* Contact Section styles */
  .contact {
    background-color: #ffffff;
    padding: 80px 0;
    text-align: center;
  }
  
  .contact h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .contact p {
    font-size: 18px;
    color: #555;
    margin-bottom: 40px;
  }
  
  /* Footer styles */
  .footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  
  .footer p {
    font-size: 14px;
  }
  
  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    .nav-menu {
      flex-direction: column;
      align-items: center;
    }
  
    .nav-menu li {
      margin: 10px 0;
    }
  }
  </style>
  