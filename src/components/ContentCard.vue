<template>
  <QCard class="h-full">
    <QCardSection class="flex">
      <QInput
        v-model="search"
        class="flex-grow"
        label="Buscar" />
      <RouterLink
        v-if="addLink"
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
      <QList dense>
        <RouterLink
          v-for="item,index in filterContent"
          :key="`${index}-${item.id}`"
          v-slot="{ navigate }"
          :to="replaceId(item.id)"
          custom>
          <QItem
            v-ripple
            clickable
            @click="() => navigate()">
            <QItemSection>
              {{ item.text }}
            </QItemSection>
          </QItem>
        </RouterLink>
      </QList>
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
  addLink?: keyof RouteNamedMap;
  itemLink: keyof RouteNamedMap;
}>();

const search = ref('');

const filterContent = computed(() => {
  return search.value ? props.content.filter((i) => i.text.includes(search.value)) : props.content;
});

/**
 * Replaces the url pattern with the given id
 */
function replaceId(id: string): string {
  return props.itemLink.replace('[id]', id);
}
</script>
