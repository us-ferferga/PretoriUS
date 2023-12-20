<template>
  <PageTemplate>
    <template #leftHeader>
      Nuevo servicio
    </template>
    <template #leftContent>
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
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <QInput
          v-model="comentarios"
          label="Comentarios..."
          outlined
          type="textarea" />
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
              } else {
                serviceStore.addService({
                  inicio: inicioDate,
                  fin: finDate,
                  comentarios,
                  lugarId: route.params.parent_id
                });
                $router.back();
              }
            }" />
        </div>
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  title: Nuevo servicio
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import { serviceStore } from '@/store/services';
import { Notify } from 'quasar';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/services/[parent_id]/add'>();

const inicioDate = ref(new Date());
const finDate = ref(new Date());
const comentarios = ref();

const inicio = computed({
  get() {
    const d = inicioDate.value;
    const date = d.getDate();
    const month = d.getMonth();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const fullDate = date < 10 ? `0${date}` : date;
    const fullMonth = month < 10 ? `0${month}` : month;
    const fullHours = hours < 10 ? `0${hours}` : hours;
    const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${fullDate}-${fullMonth}-${d.getFullYear()} ${fullHours}:${fullMinutes}`;
  }, set(val: string) {
    const [date, time] = val.split(' ');
    const [day, month, year] = date.split('-');
    const [hours, minutes] = time.split(':');

    inicioDate.value = new Date(Number(year), Number(month), Number(day), Number(hours), Number(minutes));
  }
});
const fin = computed({
  get() {
    const d = finDate.value;
    const date = d.getDate();
    const month = d.getMonth();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const fullDate = date < 10 ? `0${date}` : date;
    const fullMonth = month < 10 ? `0${month}` : month;
    const fullHours = hours < 10 ? `0${hours}` : hours;
    const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${fullDate}-${fullMonth}-${d.getFullYear()} ${fullHours}:${fullMinutes}`;
  }, set(val: string) {
    const [date, time] = val.split(' ');
    const [day, month, year] = date.split('-');
    const [hours, minutes] = time.split(':');

    finDate.value = new Date(Number(year), Number(month), Number(day), Number(hours), Number(minutes));
  }
});
</script>
