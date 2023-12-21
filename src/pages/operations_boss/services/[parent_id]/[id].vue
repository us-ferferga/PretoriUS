<template>
  <PageTemplate v-if="lugar && servicio">
    <template #leftHeader>
      {{ lugar.nombre }} - ({{ printDate(servicio.inicio) }} - {{ printDate(servicio.fin) }})
    </template>
    <template #leftContent>
      <QInput
        v-model="comentarios"
        readonly
        label="Comentarios"
        outlined
        type="textarea" />
      <ContentCard
        :content="turnos"
        search-label="Buscar turnos..." />
    </template>
    <template #rightHeader>
      Añadir turno
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <div class="min-w-xl">
          <h4 class="text-h6">
            Inicio
          </h4>
          <div class="flex flex-row">
            <QDate
              v-model="inicio"
              mask="DD-MM-YYYY HH:mm"
              color="primary" />
            <QTime
              v-model="inicio"
              mask="DD-MM-YYYY HH:mm"
              color="primary" />
          </div>
          <h4 class="text-h6">
            Fin
          </h4>
          <div class="flex flex-row">
            <QDate
              v-model="fin"
              mask="DD-MM-YYYY HH:mm"
              color="primary" />
            <QTime
              v-model="fin"
              mask="DD-MM-YYYY HH:mm"
              color="primary" />
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <QBtn
            label="Crear"
            @click="() => {
              if (finDate <= inicioDate) {
                Notify.create({
                  message: 'La fecha de fin no puede ser menor o igual que la de inicio',
                  color: 'red',
                  type: 'negative'
                });
              } else if (turnStore.turns.some(t => t.inicio >= inicioDate && t.fin <= finDate && t.serviceId === route.params.id)) {
                Notify.create({
                  message: 'Ya existe un turno con esas características',
                  color: 'red',
                  type: 'negative'
                });
              } else {
                turnStore.addTurn({
                  inicio: inicioDate,
                  fin: finDate,
                  serviceId: route.params.id
                });
              }
            }" />
        </div>
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import { placeStore } from '@/store/places';
import { serviceStore } from '@/store/services';
import { turnStore } from '@/store/turns';
import { printDate } from '@/utils/date';
import { Notify } from 'quasar';
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/operations_boss/services/[parent_id]/[id]'>();

const inicioDate = ref(new Date());
const finDate = ref(new Date());

const servicio = computed(() => serviceStore.services.find((s) => s.id === route.params.id));
const lugar = computed(() => placeStore.places.find((p) => p.id === route.params.parent_id));
const comentarios = computed(() => servicio.value?.comentarios);
const turnos = computed(() => {
  return turnStore.turns.filter((t) => t.serviceId === route.params.id)
    .map((t) => {
      let text = `${printDate(t.inicio)} - ${printDate(t.fin)}`;

      text += t.fin <= new Date()? ' - Realizado' : ' - Pendiente';

      return {
        text,
        id: t.id
      };
    });
});
const inicio = computed({
  get() {
    return printDate(inicioDate.value);
  }, set(val: string) {
    const [date, time] = val.split(' ');
    const [day, month, year] = date.split('-');
    const [hours, minutes] = time.split(':');

    inicioDate.value = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
  }
});
const fin = computed({
  get() {
    return printDate(finDate.value);
  }, set(val: string) {
    const [date, time] = val.split(' ');
    const [day, month, year] = date.split('-');
    const [hours, minutes] = time.split(':');

    finDate.value = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
  }
});

watchEffect(() => {
  const inicio = servicio.value?.inicio;
  const fin = servicio.value?.fin;

  if (inicio && fin) {
    route.meta.title = `Servicio del ${printDate(inicio)} al ${printDate(fin)}`;
  }
});
</script>
