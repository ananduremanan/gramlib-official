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
  </div>
</nav>

{#if menuClicked}
  <div
    class="top-0 left-0 px-10 py-4 bg-gray-100 min-h-screen w-[70vw] fixed dark:bg-gray-700 slide-in z-50"
  >
    <div class="flex justify-between items-center">
      <span>Home</span>
      <button on:click={toggleMenu}><X /></button>
    </div>
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

  .glass {
    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
</style>
