<script lang="ts">
  import { ClipboardCleanOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";

  let isCopied: boolean = false;

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 2000);
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  }

  function resetIsCopied() {
    setTimeout(() => {
      isCopied = false;
    }, 2000);
  }

  onMount(resetIsCopied);
</script>

<section
  class="px-5 py-4 min-h-screen lg:px-20 lg:grid lg:grid-cols-2 hero md:bg-hero-light bg-center bg-cover bg-no-repeat bg-fixed md:dark:bg-hero-dark max-sm:bg-left max-sm:bg-white max-sm:dark:bg-black"
>
  <div class="flex flex-col items-left gap-4 lg:gap-6">
    <div class="relative w-full h-40">
      <div
        class="absolute w-20 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 bottom-4 left-0"
      ></div>
      <div
        class="absolute w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 ml-24 bottom-4 left-0"
      ></div>
    </div>
    <h1 class="text-4xl font-bold lg:text-6xl">
      The Perfect Library For Your Perfect <span class="text-orange-600"
        >Project</span
      >
    </h1>
    <p class="lg:text-xl">A Svelte Component Library for faster development</p>
    <div class="flex gap-2">
      <a href="https://gbs-svelte-bblock.netlify.app/"
        ><button
          class="bg-orange-600 text-white px-2 py-1 rounded-lg lg:text-xl hover:bg-orange-500"
          >Get Started</button
        ></a
      ><a
        href="https://www.figma.com/design/3oWVbY7t79mavZh1qQD4ym/Gramlib?node-id=0-1&t=EXs4oXYj8MxIvwKw-1"
        ><button class="border text-orange-600 px-2 py-1 rounded-lg lg:text-xl"
          >Figma File</button
        ></a
      >
    </div>
  </div>
</section>

<section
  class="min-h-screen px-5 py-4 bg-gray-700 text-white lg:grid lg:grid-cols-2 lg:px-20"
>
  <div>
    <div class="relative w-full h-40 max-sm:h-20">
      <div
        class="absolute w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 ml-24 bottom-4 left-0"
      ></div>
      <div
        class="absolute w-20 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 bottom-4 left-0"
      ></div>
    </div>
    <div class="md:mt-4">Why Choose GramLib</div>
    <div class="text-4xl font-bold lg:text-6xl mt-8">
      Out of the Box Headless UI with <span class="text-orange-600"
        >Minimal</span
      >
      Basic Styles
    </div>
    <p class="mt-4">
      A headless UI library designed for developers who seek a minimalist
      approach to building user interfaces. Unlike traditional UI libraries that
      come with extensive default styles and components, Gramlib focuses on
      providing unstyled, highly customizable components.
    </p>
    <button
      class="bg-orange-600 text-white px-2 py-1 rounded-lg lg:text-xl hover:bg-orange-500 mt-4"
      >Learn More</button
    >
  </div>
  <div class="flex items-center justify-center">
    <img src="/user-interface.png" alt="" />
  </div>
</section>

<section class="h-auto px-5 py-14 bg-white text-black lg:px-20 flex flex-col">
  <div class="text-4xl font-bold lg:text-6xl">
    Get <span class="text-orange-600">Started</span>
  </div>

  <div class="flex max-sm:flex-col items-left mt-4 gap-2">
    <button
      class="p-4 bg-gray-100 rounded-lg flex justify-between"
      on:click={() => copyToClipboard("npm i @grampro/svelte-block")}
    >
      <code>npm i @grampro/svelte-block</code><ClipboardCleanOutline />
    </button>
    <div>
      <a href="https://gbs-svelte-bblock.netlify.app/"
        ><button
          class="bg-orange-600 text-white px-2 py-1 rounded-lg lg:text-xl hover:bg-orange-500 h-full"
          >Read Documentation</button
        ></a
      >
    </div>
  </div>

  {#if isCopied}
    <p class="text-green-500">Text copied to clipboard</p>
  {/if}
</section>
