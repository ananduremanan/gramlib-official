<footer
  class="bg-gray-900 text-white px-5 py-4 lg:py-20 lg:px-20 lg:grid lg:grid-cols-2"
>
  <div>
    <p>
      Gramlib is an open source component library built with svelte components
      and tailwind.
    </p>
    <ul class="flex flex-col gap-2 mt-4">
      <li>
        <a href="https://gramproindia.com/" class="hover:text-orange-500"
          >About US</a
        >
      </li>
      <li>
        <a
          href="https://github.com/ananduremanan/svelte-component-library"
          class="hover:text-orange-500">Report Bug</a
        >
      </li>
    </ul>
  </div>
  <div>
    <div>Socials</div>
    <div class="flex gap-1 items-center">
      <a
        href="https://www.npmjs.com/package/@grampro/svelte-block"
        target="_blank"
        aria-label="click to visit npm profile"
        class="hover:text-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 10v4h2v-3h1v3h1v-4zm5 0v5h2v-1h2v-4zm3 1v2h-1v-2zm2-1v4h2v-3h1v3h1v-3h1v3h1v-4zM3 9h18v6h-9v1H8v-1H3z"
          />
        </svg></a
      >

      <a
        href="https://github.com/ananduremanan/svelte-component-library"
        target="_blank"
        aria-label="click to visit github profile"
        class="hover:text-orange-500"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg></a
      >
    </div>
  </div>

  <p class="text-xs mt-8">
    Grampro Business Services © {new Date().toISOString().slice(0, 4)}
  </p>
</footer>
