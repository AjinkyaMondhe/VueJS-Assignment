<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand ml-3" href="#">Task Management</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/createTaskModal" class="nav-item nav-link">Create Task</router-link>
          <router-link to="/Profile" class="nav-item nav-link">Profile</router-link>
          <router-link to="/" class="nav-item nav-link">Log out</router-link>
        </div>
      </div>
    </nav>
  </div>

  <div class="container">
    <h2 class="text-center mt-5">My Vue Todo App</h2>

    <!-- Input fields for task, due date, priority, description, and category -->
    <div class="mt-3">
      <div class="form-group">
        <label for="task">Task Title:</label>
        <input v-model="task" type="text" class="form-control" id="task" placeholder="Enter Task">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="description" class="form-control" id="description" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="dueDate">Due Date:</label>
        <input v-model="dueDate" type="date" class="form-control" id="dueDate">
      </div>
      <div class="form-group">
        <label for="priority">Priority:</label>
        <select v-model="priority" class="form-control" id="priority">
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
 
      <div class="form-group">
        <label for="category">Category:</label>
        <select v-model="category" class="form-control" id="priority">
          <option value="none">None</option>
          <option value="low">Work</option>
          <option value="medium">Personal</option>
          <option value="high">Other</option>
        </select>
      </div>
    </div>

    <!-- Submit button at the bottom of the form -->
    <div class="d-flex justify-content-end mt-3">
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>

    <div class="row mt-3">
      <div class="col-md-4" v-for="(task, index) in tasks" :key="index">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title"><strong>Title:</strong> {{ task.name }}</h5>
            <p class="card-text"> <strong>Description:</strong> {{ task.description }}</p>
            <p class="card-text"><strong>Due Date:</strong> {{ (task.dueDate) }}</p>
            <p class="card-text"><strong>Priority:</strong> {{ (task.priority) }}</p>
            <p class="card-text"><strong>Category:</strong> {{ (task.status) }}</p>
            <div class="text-center">
              <i class="fa fa-pencil pointer" @click="editTask(index)"></i>
              <i class="fa fa-trash pointer" @click="deleteTask(index)"></i>
              <i class="fa fa-check-circle pointer" @click="changeStatus(index)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      task: '', // Task title
      description: '', // Task description
      dueDate: '', // Task due date
      priority: 'None', // Task priority (default to none)
      category: 'None', // Task category
      editedTask: null, // Index of the task being edited
      availableStatuses: ['work', 'personal', 'others'],
      tasks: [
        {
          name: 'Steal banana from the store.',
          description: 'Make sure no one sees you doing it.',
          status: 'work'
        },
        {
          name: 'Eat 1kg chocolate in 1 hour.',
          description: 'Challenge accepted!',
          status: 'personal'
        },
        {
          name: 'Roam for 5Kms everyday',
          description: 'Take a scenic route.',
          status: 'thoers'
        }
      ],
    };
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        // Create a new task
        this.tasks.push({
          name: this.task,
          description: this.description,
          dueDate: this.dueDate,
          priority: this.priority,
          status: 'On-going', // Default status for new tasks
          category: this.category
        });
      } else {
        // Update an existing task
        this.tasks[this.editedTask].name = this.task;
        this.tasks[this.editedTask].description = this.description;
        this.tasks[this.editedTask].dueDate = this.dueDate;
        this.tasks[this.editedTask].priority = this.priority;
        this.tasks[this.editedTask].category = this.category;
        this.editedTask = null;
      }

      // Clear the input fields
      this.clearInputFields();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      // Fill the input fields with the task information for editing
      this.editedTask = index;
      this.task = this.tasks[index].name;
      this.description = this.tasks[index].description;
      this.dueDate = this.tasks[index].dueDate;
      this.priority = this.tasks[index].priority;
      this.category = this.tasks[index].category;
    },
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
    // firstCharUpper(str) {
    //   return str.charAt(0).toUpperCase() + str.slice(1);
    // },
    clearInputFields() {
      // Clear the input fields after submitting or canceling the edit
      this.task = '';
      this.description = '';
      this.dueDate = '';
      this.priority = 'none';
      this.category = '';
    }
  }
};
</script>
  
<style scoped>
.card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-5px);
}

.btn-primary {
  background-color: #007BFF;
  border-color: #007BFF;
}

.btn-danger {
  background-color: #FF0000;
  border-color: #FF0000;
}

.btn-primary:hover,
.btn-danger:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}

.card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: #007BFF;
  border-color: #007BFF;
}

.btn-danger {
  background-color: #FF0000;
  border-color: #FF0000;
}

.btn-primary:hover,
.btn-danger:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
}

.navbar {
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

/* Cards css */
.pointer,
.text-center {
  cursor: pointer;
}

.card {
  width: 100%;
}

.pointer,
.text-center {
  cursor: pointer;
}

.card {
  width: 100%;
}

/* Styling for icons */
.card-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.card-icon {
  padding: 5px;
  border-radius: 50%;
  font-size: 20px;
  background-color: #007BFF;
  /* Change the background color to your preference */
  color: white;
  /* Change the icon color to your preference */
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-icon:hover {
  background-color: #0056b3;
  /* Change the background color on hover */
}

.fa {
  margin: 10px
}

/* Import Font Awesome CSS */
@import '~font-awesome/css/font-awesome.css';
</style>
