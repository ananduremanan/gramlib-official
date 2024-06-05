<script>
  import { DarkMode } from "flowbite-svelte";
  import { Menu, X } from "lucide-svelte";

  let menuClicked = false;

  function toggleMenu() {
    menuClicked = !menuClicked;
  }
</script>

<nav
  class="flex px-5 py-4 justify-between items-center sticky top-0 z-50 bg-white dark:bg-black lg:px-20 lg:text-xl"
>
  <div class="flex items-center gap-2">
    <button on:click={toggleMenu} class="lg:hidden">
      <Menu size="20" />
    </button>
    <span class="">GramLib</span>
  </div>
  <div class="flex items-center gap-6">
    <ul class="flex text-base gap-6 max-sm:hidden">
      <a href="https://gbs-svelte-bblock.netlify.app/"
        ><li class="hover:text-orange-600 cursor-pointer">Documentation</li></a
      >
      <li class="hover:text-orange-600 cursor-pointer">Components</li>
    </ul>
    <DarkMode btnClass="dark:text-white" />
    <a
      href="https://github.com/ananduremanan/svelte-component-library"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
    </a>
  </div>
</nav>

{#if menuClicked}
  <div
    class="top-0 left-0 px-10 py-4 bg-gray-100 min-h-screen w-[70vw] fixed dark:bg-gray-700 slide-in z-50"
  >
    <ul class="flex flex-col gap-2 text-black dark:text-white">
      <li>
        <div class="flex justify-between items-center">
          <span><a href="/">Home</a></span>
          <button on:click={toggleMenu}><X /></button>
        </div>
      </li>
      <li>
        <a href="https://gbs-svelte-bblock.netlify.app">Documentation</a>
      </li>
      <li>Components</li>
      <li>Github</li>
    </ul>
  </div>
{/if}

<style>
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .slide-in {
    animation: slideIn 0.3s forwards;
  }
</style>
