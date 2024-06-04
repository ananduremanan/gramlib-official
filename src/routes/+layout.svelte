<script>
  import "../app.css";
  import Footer from "./UI/Footer.svelte";
  import Navbar from "./UI/Navbar.svelte";
</script>

<main class="dark:text-white dark:bg-gray-800">
  <Navbar />
  <slot />
  <Footer />
</main>
