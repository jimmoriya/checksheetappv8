<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to="/" class="navbar-brand">
        <img
          style="max-height: 25px; padding-right: 10px"
          alt="Vue logo"
          src="../assets/logo.png"
        />Smart Checksheet App
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/checksheetlist" class="nav-link">
              Checksheet List
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/checksheets" class="nav-link">
              Checksheet
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link"> Tasks </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              Register
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"> Login </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/logout" class="nav-link"> Logout </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Jim </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
</style>