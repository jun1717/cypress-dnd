<script setup>
import { ref, computed } from "vue";

const message = "HTML Drag&Drop in vue.js page";

const lists = ref([
  {
    id: 1,
    name: "ProductA",
    category: "A",
  },
  {
    id: 2,
    name: "ProductB",
    category: "B",
  },
  {
    id: 3,
    name: "ProductC",
    category: "B",
  },
  {
    id: 4,
    name: "ProductD",
    category: "C",
  },
  {
    id: 5,
    name: "ProductE",
    category: "A",
  },
]);

const CategoryA = computed(() => lists.value.filter((list) => list.category == "A"));
const CategoryB = computed(() => lists.value.filter((list) => list.category == "B"));
const CategoryC = computed(() => lists.value.filter((list) => list.category == "C"));

const dragList = (event, dragId) => {
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("list-id", dragId);
};
const dropList = (event, dropCategory) => {
  const dragId = event.dataTransfer.getData("list-id");
  const dragList = lists.value.find((list) => list.id == dragId);
  dragList.category = dropCategory;
};
</script>

<template>
  <div id="app" class="container mt-5">
    <h1>{{ message }}</h1>
    <div class="d-flex justify-content-between bg-dark p-3">
      <div
        class="bg-secondary p-2 m-2 w-100"
        @drop="dropList($event, 'A')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2 class="text-light">Category A</h2>
        <div
          class="bg-white m-2 p-2"
          v-for="(list, index) in CategoryA"
          draggable="true"
          @dragstart="dragList($event, list.id)"
          :data-cy="list.name"
        >
          {{ list.name }}
        </div>
      </div>
      <div
        class="bg-secondary p-2 m-2 w-100"
        data-cy="Category_B"
        @drop="dropList($event, 'B')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2 class="text-light">Category B</h2>
        <div
          class="bg-white m-2 p-2"
          v-for="(list, index) in CategoryB"
          draggable="true"
          @dragstart="dragList($event, list.id)"
          :data-cy="list.id"
        >
          {{ list.name }}
        </div>
      </div>
      <div
        class="bg-secondary p-2 m-2 w-100"
        @drop="dropList($event, 'C')"
        @dragover.prevent
        @dragenter.prevent
      >
        <h2 class="text-light">Category C</h2>
        <div
          class="bg-white m-2 p-2"
          v-for="(list, index) in CategoryC"
          draggable="true"
          @dragstart="dragList($event, list.id)"
          :data-cy="list.id"
        >
          {{ list.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
