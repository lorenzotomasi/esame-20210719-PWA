<template>
  <Navbar />
  <router-view />
  <Footer title="NomeCompagnia" />
</template>

<style lang="scss">
$background-color: #fdfdfd;
$footer-background: #175592;
// Navbar style
body {
  padding-top: 3.5rem;
  background-color: $background-color;
}
</style>
