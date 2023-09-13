<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required>

        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>

        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" v-model="dueDate" required>

        <label for="priority">Priority:</label>
        <select id="priority" v-model="priority" required>
          <option value="none" disabled>Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label for="category">Category:</label>
        <select id="category" v-model="category" required>
          <option value="" disabled>Select Category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" style="margin: 10px auto;">Submit</button>
        <button @click="resetForm" type="reset" style="margin: auto;">Reset</button>

        <div class="error-message">{{ errors.name }}</div>
        <div class="error-message">{{ errors.password }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'createTaskModal',
  data() {
    return {
      title: '',
      description: '',
      dueDate: '',
      priority: 'none',
      category: '',
      editedTask: null,
      availableStatuses: ['to-do', 'in-progress', 'finished'],
      tasks: [
        {
          name: 'Example Task',
          description: 'This is an example task',
          dueDate: '2023-09-15',
          priority: 'low',
          category: 'work',
          status: 'to-do'
        }
      ],
      selectedUser: null,
      users: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
      ],
      errors: {
        title: '',
        description: '',
        dueDate: '',
        priority: '',
        category: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Check if all required fields are filled
      if (!this.validateForm()) {
        return;
      }

      // Create a task object to send to the backend
      const task = {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority,
        category: this.category,
        status: 'to-do'
      };
      
      // Send a POST request to your backend to create the task
      axios
        .post('/addTask', task) // Update the API endpoint URL
        .then((response) => {
          const createdTaskId = response.data.taskId;
          // Assuming you have a way to pass the data to the main.vue component
          this.$emit('task-created', { ...task, id: createdTaskId });
          this.clearInputFields();
          alert('Task added successfully.');
        })
        .catch((error) => {
          console.error('Error creating task:', error);
          alert('An error occurred while creating the task.');
        });
    },
    validateForm() {
      let isValid = true;
      this.errors = {};

      if (this.title.trim() === '') {
        this.errors.title = 'Title is required';
        isValid = false;
      }

      if (this.description.trim() === '') {
        this.errors.description = 'Description is required';
        isValid = false;
      }

      if (this.dueDate.trim() === '') {
        this.errors.dueDate = 'Due Date is required';
        isValid = false;
      }

      if (this.priority === 'none') {
        this.errors.priority = 'Priority is required';
        isValid = false;
      }

      if (this.category.trim() === '') {
        this.errors.category = 'Category is required';
        isValid = false;
      }

      return isValid;
    },
    clearInputFields() {
      this.title = '';
      this.description = '';
      this.dueDate = '';
      this.priority = 'none';
      this.category = '';
    }
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.form-container {
  background-color: #ffffff;
  /* Replace with your desired background color */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* Add the desired box shadow */
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  /* Adjust the width as needed */
  margin: 0 auto;
  /* Center the container horizontally */
}

body {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label,
input,
select {
  margin: 5px 0;
}

label {
  font-weight: bold;
}

input,
select {
  width: 60%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"],
button[type="reset"] {
  width: 40%;
  margin-top: 10px;
  padding: 5px;
  background-color: #3085d6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button[type="reset"] {
  background-color: #d33;
}

button[type="submit"]:hover,
button[type="reset"]:hover {
  background-color: #144a96;
}

.form-container {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
}

.select-container {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  /* Background color for the select box */
  outline: none;
  /* Remove the default focus outline */
}

/* Style the select when it's focused */
select:focus {
  border-color: #3085d6;
  /* Change border color on focus */
}

/* Style the select arrow icon */
select::-ms-expand {
  display: none;
  /* Remove arrow icon in IE/Edge */
}

/* Style the select dropdown options */
select option {
  background-color: white;
  color: #333;
}

/* Style the select dropdown on hover */
select option:hover {
  background-color: #3085d6;
  color: white;
}

/* Style the select dropdown when selected */
select option:checked {
  background-color: #3085d6;
  color: white;
}

.error-message {
  /* background-color: rgb(242, 241, 241); */
  color: rgb(240, 55, 52);
  margin: 5px;
  border-radius: 4px;
}
</style>
