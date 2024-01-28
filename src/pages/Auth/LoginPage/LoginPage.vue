<template>
  <q-page>
    <div class="container">
      <div class="panel">
        <div class="logo">
          <img src="../../../assets/Logo/Logo.svg" />
        </div>
        <q-card class="section box-shadow q-pa-xl br-10">
          <q-card-section class="heading-one text-center">Login</q-card-section>
          <q-card-section class="form q-gutter-y-md q-mt-sm">
            <q-input
              class="main-text-input"
              v-model="email"
              color="primary"
              label="Email"
              dense
              filled
            />
            <q-input
              class="main-text-input"
              v-model="password"
              color="primary"
              label="Password"
              dense
              filled
            />
            <div class="text-center">
              <q-btn
                unelevated
                no-caps
                class="primary-button"
                label="Log In"
                @click="Login()"
                :disable="loading || !email || !password"
                :loading="loading"
              />
            </div>
          </q-card-section>
          <div class="q-mt-md text-center">
            New to ProRouting?
            <span
              class="text-underline text-bold clickable"
              @click="GoToRegister()"
              >Register</span
            >
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  watch: {
    email() {
      this.email = this.email.toLowerCase(); //force email lowercase
    },
  },
  methods: {
    GoToRegister() {
      this.$router.push("/register");
    },
    async Login() {
      try {
        this.loading = true;
        const { message, success } =
          await this.$api.auth.SignInWithEmailAndPassword(
            this.email,
            this.password
          );

        if (!success) {
          return this.$q.notify({
            message,
            color: "negative",
            position: "top",
            timeout: 2000,
          });
        }

        this.$router.push("/dashboard");
      } catch (e) {
        return this.$q.notify({
          message: "Something went wrong",
          color: "negative",
          position: "top",
          timeout: 2000,
        });
      } finally {
        this.loading = false;
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
