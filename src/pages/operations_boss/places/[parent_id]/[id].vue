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
        add-link="/operations_boss/services/[parent_id]/add"
        item-link="/operations_boss/services/[parent_id]/[id]"
        :parent-id="lugar.id"
        search-label="Buscar servicios..." />
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
import { serviceStore } from '@/store/services';
import { turnStore } from '@/store/turns';
import { printDate } from '@/utils/date';
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/operations_boss/places/[parent_id]/[id]'>();

const empresa = computed(() => {
  return clientStore.clients.find((p) => p.id === route.params.parent_id);
});
const lugar = computed(() => {
  return placeStore.places.find((p) => p.id === route.params.id && p.clientId === route.params.parent_id);
});
const servicios = computed(() => {
  const currentDate = new Date();

  return serviceStore.services.filter((s) => s.lugarId === route.params.id)
    .map((s) => {
      const turns = turnStore.turns.filter((t) => t.serviceId === s.id);
      let text = `${printDate(s.inicio)} a ${printDate(s.fin)}`;

      if (currentDate > s.fin) {
        text += ' - Antiguo';
      }

      text += turns.length > 0 ? ' - Con turnos' : ' - Sin turnos';

      if (turns.every((t) => t.fin <= new Date())) {
        text += ' - Todos los turnos finalizados';
      } else if (turns.some((t) => t.fin <= new Date())) {
        text += ' - Algunos turnos finalizados';
      } else {
        text += ' - Ningún turno finalizado';
      }

      return {
        id: s.id,
        text
      };
    });
});

watchEffect(() => {
  route.meta.title = lugar.value?.nombre;
});
</script>
