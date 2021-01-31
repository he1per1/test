<template>
  <div :style="{ width: '100%' }">
    <div class="card__login">
      <header class="login__header">
        <div class="header__row">
          <div class="header__title">
            <h4>Welcome Back !</h4>
            <p>Sign in to continue</p>
          </div>
          <div class="header__image">
            <img src="~/assets/img/login_profile.png" alt="login image" />
          </div>
        </div>
        <div class="header__avatar">
          <img src="~/assets/img/login_avatar.png" alt="login avatar" />
        </div>
      </header>

      <form class="login__form" @submit.prevent="login">
        <div class="form__group">
          <label for="name">Username</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter username"
            v-model="controls.name"
          />
        </div>
        <div class="form__group form__group-icon">
          <label for="password">Password</label>
          <div class="icon-wrap">
            <input
              :type="visiblePassword ? 'text' : 'password'"
              id="password"
              required
              v-model="controls.password"
              placeholder="Enter password"
            />
            <span @click="visiblePassword = !visiblePassword">
              <img
                src="~/assets/img/icon_lock.png"
                alt="icon lock"
                v-if="visiblePassword"
              />
              <img src="~/assets/img/icon_eye.png" alt="icon eye" v-else />
            </span>
          </div>
        </div>
        <div class="form__group form__group-checkbox">
          <input type="checkbox" id="remember" v-model="controls.remember" />
          <label for="remember">Remember me</label>
        </div>

        <button class="form__button" type="submit">Log In</button>
      </form>

      <footer class="login__footer">
        <img src="~/assets/img/icon_lock.png" alt="icon lock" />
        <a href="#">Forgot your password?</a>
      </footer>
    </div>

    <footer class="auth__footer">
      <p>Don’t have an account ? <a href="#">Signup now</a></p>
      <p>© 2020 Crafted and designed by 10ursabanoglu. 🎉</p>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "auth",
  data: () => ({
    controls: {
      name: "",
      password: "",
      remember: false,
    },
    visiblePassword: false,
  }),
  methods: {
    ...mapMutations({
      setAuth: "auth/setAuth",
    }),
    login() {
      this.setAuth();
      this.$router.push({ name: "index" });
    },
  },
};
</script>
