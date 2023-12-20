<template>
  <PageTemplate>
    <template #leftHeader>
      Nuevo lugar
    </template>
    <template #leftContent>
      <div class="min-w-xl">
        <QForm
          ref="form"
          greedy>
          <QInput
            v-model="nombre"
            class="ma-2"
            outlined
            label="Nombre"
            :rules="rules" />
          <QInput
            v-model="direccion"
            class="ma-2"
            outlined
            :rules="rules"
            label="Dirección" />
          <QSelect
            v-model="edificio"
            class="ma-2"
            outlined
            label="Tipo de edificio"
            :rules="rules"
            :options="Object.values(TipoEdificio)" />
          <QInput
            v-model="camaras"
            type="number"
            class="ma-2"
            outlined
            :rules="rules"
            label="Número de cámaras" />
          <QInput
            v-model="plantas"
            class="ma-2"
            type="number"
            outlined
            :rules="rules"
            label="Número de plantas" />
          <QCheckbox
            v-model="garita"
            class="ma-2"
            label="Posee garita" />
        </QForm>
        <div class="flex justify-center mt-5">
          <QBtn
            label="Crear"
            @click="async () => {
              const valid = await form?.validate() ?? false;
              if (valid) {
                placeStore.addPlace({
                  nombre,
                  clientId: route.params.parent_id,
                  direccion,
                  edificio: edificio ?? 'Interior',
                  camaras: camaras ?? 0,
                  plantas: plantas ?? 0,
                  garita
                });
                $router.back();
              } else {
                Notify.create({
                  message: 'El formulario no ha pasado la validación',
                  color: 'red',
                  type: 'negative'
                });
              }
            }" />
        </div>
      </div>
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <img
          :src="mapPlaceholder"
          alt="Map placeholder" />
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import mapPlaceholder from '@/assets/img/map-placeholder.png';
import { placeStore } from '@/store/places';
import { Notify, QForm } from 'quasar';
import { ref } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/places/[parent_id]/add'>();

enum TipoEdificio {
  Interior = 'Interior',
  Exterior = 'Exterior'
}

const rules = [
  (val: string): boolean | string => val && val.length > 0 || 'Este campo no puede estar vacío'
];

const form = ref<QForm>();
const nombre = ref('');
const direccion = ref('');
const edificio = ref<TipoEdificio>();
const camaras = ref<number>();
const plantas = ref<number>();
const garita = ref(false);
</script>

