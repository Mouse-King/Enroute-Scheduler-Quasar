<template>
  <q-page>
    <div class="container">
      <div class="panel">
        <img src="../../../assets/Logo/Logo.svg" />

        <q-card class="section box-shadow q-pa-xl br-10 q-mt-md">
          <q-card-section class="heading-one text-center"
            >Register</q-card-section
          >
          <q-card-section class="form q-gutter-y-md q-mt-sm">
            <q-input
              class="main-text-input"
              v-model="name"
              color="primary"
              label="First Name"
              dense
              filled
            />
            <q-input
              class="main-text-input"
              v-model="email"
              color="primary"
              label="Email"
              dense
              filled
            />
            <div class="text-center">
              <q-btn
                unelevated
                no-caps
                class="primary-button"
                label="Register"
                @click="Register"
                :disable="loading || !email || !name"
                :loading="loading"
              />
            </div>
          </q-card-section>
          <div class="q-mt-md text-center">
            Already have an account?
            <span
              class="text-underline text-bold clickable"
              @click="GoToLogIn()"
              >Log In</span
            >
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { INITIAL_ACCOUNT_PASSWORD } from "../../../config/config";
export default {
  data() {
    return {
      email: "",
      name: "",
      loading: false,
    };
  },
  watch: {
    email() {
      this.email = this.email.toLowerCase(); //force email lowercase
    },
  },
  methods: {
    GoToLogIn() {
      this.$router.push("/login");
    },
    async Register() {
      this.loading = true;
      const { success, message } = await this.$api.auth.CreateUser({
        email: this.email,
        fname: this.name.split(" ")[0] || this.name,
      });

      if (!success) {
        return this.$q.notify({
          message: message,
          color: "negative",
          position: "top",
        });
      } else {
        this.$q.notify({
          message: "Account created successfully",
          color: "positive",
          position: "top",
        });
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.panel {
  width: 100%;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  padding-bottom: 15px;
}

.section {
  min-width: 500px;
  max-width: 90%;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .panel {
    max-width: none;
    height: auto;
  }

  .section {
    min-width: auto;
    max-width: none;
  }
}
</style>
