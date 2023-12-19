<template>
  <QCard class="h-full">
    <QCardSection class="flex">
      <QInput
        v-model="search"
        class="flex-grow"
        label="Buscar" />
      <RouterLink
        v-slot="{ navigate }"
        :to="addLink"
        custom>
        <QBtn
          class="ml-2 flex justify-center"
          @click="() => navigate()">
          <IGgAdd class="mr-1" />
          Nuevo
        </QBtn>
      </RouterLink>
    </QCardSection>
    <QCardSection class="h-xl w-2xl overflow-scroll">
      <q-list dense>
      <q-item v-for="item,index in filterContent"
        :key="`${index}-${item.id}`" clickable v-ripple>
        <q-item-section>
          {{ item.text }}
        </q-item-section>
      </q-item>
      </q-list>
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouteNamedMap } from 'vue-router/auto/routes';

interface TableItem {
  text: string;
  id: string;
}

const props = defineProps<{
  content: TableItem[];
  addLink: keyof RouteNamedMap;
}>();

const search = ref('');

const filterContent = computed(() => {
  return search.value ? props.content.filter((i) => i.text.includes(search.value)) : props.content;
});
</script>
