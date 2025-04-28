function esperarDosSegundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("¡Pasaron 2 segundos!");
      }, 2000);
    });
  }
  
  async function mostrarMensaje() {
    const mensaje = await esperarDosSegundos();
    console.log(mensaje);
  }
  
  mostrarMensaje();
  