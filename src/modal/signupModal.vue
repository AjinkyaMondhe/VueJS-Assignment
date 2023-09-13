<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-4 text-center">

              <h2 class="fw-bold mb-3 text-uppercase">Sign Up</h2>
              <p class="text-white-50 mb-4">Please enter your username, login and password!</p>

              <!-- Username Input -->
              <div class="form-outline form-white mb-3">
                <input type="text" id="typeUsernameX" class="form-control form-control-lg" v-model="username" />
                <label class="form-label" for="typeUsernameX">Username</label>
              </div>

              <!-- Email Input -->
              <div class="form-outline form-white mb-3">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <!-- Password Input -->
              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="password" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-3"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <router-link to="/main"> <button class="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
              </router-link>

              <div>
                <p class="mb-0 mt-3">Already have an account?<router-link to="/login"><a href="#!"
                      class="text-white-50 fw-bold">Login</a></router-link> </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

import axios from 'axios';

export default {
  name: "signupModal",

  data() {

    return {

      email: '',

      password: '',

      loginResult: null,

    };
  },

  computed: {

    ...mapGetters(['userId']),
  },

  methods: {

    ...mapActions(['loginUser']),

    async login() {

      try {

        const response = await axios.post('http://localhost:3000/login', {

          email: this.email,

          password: this.password,

        });



        if (response.status === 200) {

          this.loginUser({

            user: response.data.user,

            token: response.data.token,

          });

          this.loginResult = 'success';

          this.$router.push('/dashboard');

        } else {

          console.error('Login failed:', response.data.error);

          this.loginResult = 'failed';

        }

      } catch (error) {

        console.error('Login failed:', error);

        this.loginResult = 'failed';

      }

    },

  },

};

</script>

<style scoped>
.gradient-custom {
  background: #6a11cb;
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
}

/* Adjust card and form size */
.card {
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
}

.form-outline {
  margin-bottom: 1rem;
}

/* Center social media icons */
.card .text-center a {
  display: inline-block;
  margin: 0 8px;
}
</style>
