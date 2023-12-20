<template>
  <PageTemplate v-if="lugar && empresa">
    <template #leftHeader>
      {{ lugar.nombre }} - {{ empresa.nombreEmpresa }} {{ empresa.razonSocial }}
    </template>
    <template #leftContent>
      <QCard>
        <QCardSection class="min-w-xl">
          <div class="text-h6">
            Datos
          </div>
        </QCardSection>
        <QCardSection class="flex flex-col">
          <div>
            <b>Dirección: </b>{{ lugar.direccion }}
          </div>
          <div>
            <b>Tipo de edificio: </b>{{ lugar.edificio }}
          </div>
          <br />
          <div>
            <b>Número de plantas: </b>{{ lugar.plantas }}
          </div>
          <div>
            <b>Número de cámaras: </b>{{ lugar.camaras }}
          </div>
          <div>
            <b>Garita: </b>{{ lugar.garita ? 'Sí' : 'No' }}
          </div>
        </qcardsection>
        <QCardSection>
          <div class="min-w-xl flex justify-center">
            <img
              :src="mapPlaceholder"
              alt="Map placeholder" />
          </div>
        </QCardSection>
      </QCard>
    </template>
    <template #rightContent>
      <ContentCard
        :content="servicios"
        add-link="/places/[parent_id]/add"
        item-link="/places/[parent_id]/[id]"
        :parent-id="empresa.id"
        search-label="Buscar lugares..." />
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import mapPlaceholder from '@/assets/img/map-placeholder.png';
import { clientStore } from '@/store/clients';
import { placeStore } from '@/store/places';
import { computed } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/places/[parent_id]/[id]'>();

const empresa = computed(() => {
  return clientStore.clients.find((p) => p.id === route.params.parent_id);
});
const lugar = computed(() => {
  return placeStore.places.find((p) => p.id === route.params.id && p.clientId === route.params.parent_id);
});
</script>
