<main>
    <h1>Welcome to <span>Svelte-Cloudflare</span></h1>
</main>

<style>
    main {
      font-family: sans-serif;
      text-align: center;
    }
  
    button {
      background: #ff3e00;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 2px;
    }

    span{
        white-space: nowrap;
    }

    :global(body) {
      background: transparent; /* Make it white if you need */
      background-color: #15222e;
      color: #fcbe24;
      padding: 0 24px;
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

</style>