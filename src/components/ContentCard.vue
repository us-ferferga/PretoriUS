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
        <Component
          :is="itemLink ? 'router-link' : 'template'"
          v-for="item,index in filterContent"
          :key="`${index}-${item.id}`"
          v-slot="routerSlots"
          :to="itemLink ? replaceId(item.id) : '/'"
          custom>
          <QItem
            v-ripple
            clickable
            @click="() => {
              if (itemLink && routerSlots.navigate) {
                routerSlots.navigate();
              }
              emit('click', item)
            }">
            <QItemSection>
              {{ item.text }}
            </QItemSection>
          </QItem>
        </Component>
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
  itemLink?: keyof RouteNamedMap;
  parentId?: string;
  searchLabel?: string;
}>();

const emit = defineEmits<{
  click: [item: TableItem];
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
  return props.itemLink ? replaceParentId(props.itemLink.replace('[id]', id)) : id;
}
</script>
