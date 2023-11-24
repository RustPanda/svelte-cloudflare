<script>
  const sendMsg = () => {
    console.log('clicked');
    fetch('/api/msg', {
      method: 'POST',
    })
  }
</script>

<main>
    <h1>Welcome to <span>Svelte-Cloudflare</span></h1>
    <button type="button" on:click={sendMsg}>Press to send msg</button>
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
      font-weight: bold;
      font-size:100%;
      margin: 3px;
    }

    button:hover {
      cursor: pointer;
      border: solid  #7c5e54;
      margin: 0;
    }

    button:active {
      background: #e93a00;
    }

    span{
        white-space: nowrap;
    }
</style>