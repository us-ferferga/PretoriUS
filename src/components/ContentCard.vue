<template>
  <QCard class="h-full">
    <QCardSection class="flex">
      <QInput
        v-model="search"
        class="flex-grow"
        :label="searchLabel ?? 'Buscar'" />
      <RouterLink
        v-if="addLink"
        v-slot="{ navigate }"
        :to="replaceParentId(addLink)"
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
        <template v-if="itemLink">
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
        </template>
        <template v-else>
          <QItem
            v-for="item,index in filterContent"
            :key="`${index}-${item.id}`">
            <QItemSection>
              {{ item.text }}
            </QItemSection>
          </QItem>
        </template>
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
  parentId?: string;
  searchLabel?: string;
}>();

const search = ref('');

const filterContent = computed(() => {
  return search.value ? props.content.filter((i) => i.text.includes(search.value)) : props.content;
});

/**
 * Replaces the parent_id in the url
 */
function replaceParentId(url: string): string {
  return props.parentId ? url.replace('[parent_id]', props.parentId) : url;
}

/**
 * Replaces the url pattern with the given id
 */
function replaceId(id: string): string {
  return replaceParentId(props.itemLink.replace('[id]', id));
}
</script>
