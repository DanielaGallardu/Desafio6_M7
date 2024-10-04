<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: '',
    };
  },
};
</script>

<template>
  <div class="contact-view">
    <h1>Contacto</h1>
    <form @submit.prevent>
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="nombre" required />
      </div>

      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div>
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="mensaje" required></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>


<style scoped>
.contact-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  padding-right: 40px;
  border: 1px solid #9d2a30;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #f0f0f0;
}

h1 {
  color: #f0f0f0;
  text-align: center;

}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #f0f0f0;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #444;
  color: #f0f0f0;

}

input:focus,
textarea:focus {
  border-color: #9d2a30;
  outline: none;

}

button {
  padding: 10px 15px;
  background-color: #9d2a30;
  color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #b43a3f;
}
</style>
