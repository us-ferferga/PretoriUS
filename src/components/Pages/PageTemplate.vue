<template>
  <div class="container min-w-full">
    <div class="Nombre-Izquierda ma-5">
      <h4>
        <slot name="leftHeader" />
      </h4>
    </div>
    <div class="Nombre-derecha ma-5">
      <h4>
        <slot name="rightHeader" />
      </h4>
    </div>
    <div class="Contenido-Izquierda ma-5">
      <slot
        v-if="$slots.leftContent"
        name="leftContent" />
      <div v-else />
    </div>
    <div class="Contenido-Derecha ma-5">
      <slot
        v-if="$slots.rightContent"
        name="rightContent" />
      <div v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.container {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr;
  gap: 2em 0em;
  grid-auto-flow: row;
  grid-auto-rows: minmax(50vh, auto);
  grid-template-areas:
    "Nombre-Izquierda Nombre-derecha"
    "Contenido-Izquierda Contenido-Derecha";
}

.Nombre-Izquierda {
  justify-self: stretch;
  align-self: center;
  grid-area: Nombre-Izquierda;
}

.Nombre-derecha {
  justify-self: center;
  align-self: center;
  grid-area: Nombre-derecha;
}

.Contenido-Izquierda {
  justify-self: center;
  align-self: center;
  grid-area: Contenido-Izquierda;
}

.Contenido-Derecha {
  justify-self: center;
  align-self: center;
  grid-area: Contenido-Derecha;
}

</style>

