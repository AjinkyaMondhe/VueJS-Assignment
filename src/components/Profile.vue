<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand ml-3" href="#">Profile</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/createTaskModal" class="nav-item nav-link">Create Task</router-link>
          <router-link to="/" class="nav-item nav-link">Log out</router-link>
        </div>
      </div>
    </nav>
    <!-- User Credentials Card -->
    <div class="col-md-4">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">User Credentials</h5>
          <div class="user-credentials">
            <p><strong>Username:</strong> {{ user.username }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Password:</strong> {{ user.password }}</p>
            <div class="form-group">
              <label for="password"><strong>Update Password:</strong></label>
              <input type="password" id="password" v-model="newPassword" class="form-control" placeholder="Update password">
              <button @click="updatePassword" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <h1>Tasks Status</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Pending Tasks</h5>
              <ul>
                <li v-for="task in pendingTasks" :key="task._id">{{ task.title }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Ongoing Tasks</h5>
              <ul>
                <li v-for="task in ongoingTasks" :key="task._id">{{ task.title }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Completed Tasks</h5>
              <ul>
                <li v-for="task in completedTasks" :key="task._id">{{ task.title }}</li>
              </ul>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Shared With</h5>
              <ul>
                <li v-for="user in sharedWithUsers" :key="user.id">{{ user.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileComponent',
  data() {
    return {
      pendingTasks: [],
      ongoingTasks: [],
      completedTasks: [],
      sharedWithUsers: [],
      user: {
        username: 'user',
        email: 'user@gmail.com',
        password: '****',
      },
      newPassword: '', // New password field
    };
  },
  mounted() {
    this.fetchTasks();
    this.fetchSharedUsers();
    this.fetchUserCredentials();
  },
  methods: {
  },
};
</script>

<style scoped>.navbar {
  background-color: #007BFF;
  border-bottom: 2px solid #0056b3;
  border-radius: 0;
}

.navbar-brand {
  font-size: 24px;
}

.navbar-nav .nav-item .nav-link {
  color: #007BFF;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #fff;
  background-color: #0056b3;
}

.container {
  padding: 20px;
}

.card {
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff; /* Background color for the card */
  text-align: center; /* Center-align card content */
  padding: 20px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced box shadow on hover */
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007BFF; /* Title color */
}

.list-group-item {
  border: none;
  font-size: 1.2rem;
  padding: 10px;
}

/* Center-align the User Credentials card within its container */
.center-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure the card takes full height */
}
.user-credentials {
  text-align: left; /* Align content to the left */
  list-style: none; /* Remove list bullets */
  padding-left: 0; /* Remove left padding for the list */
}

.user-credentials p {
  margin-bottom: 0.5rem; /* Add spacing between paragraphs */
}
</style>
