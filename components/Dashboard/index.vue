<template>
    <div class="lTableCon">
    <div class="lTableGrid">
      <div class="lTableGridItem">
        <h2 class="underline">Position</h2>
        <div v-if="jsonData">
          <div v-for="(item, index) in jsonData" :key="item.id">
              <h2>{{ index + 1 }}</h2>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>
      <div class="lTableGridItem clubColumn">
        <h2 class="underline">Book Club</h2>
        <div v-if="jsonData">
          <div v-for="name in jsonData" :key="name.id">
              <h2>{{ name.title }}</h2>
          </div>
      </div>
        <div v-else>Loading...</div>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline">Created in</h2>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline">Members</h2>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline">Books read</h2>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const jsonData = ref(null);

const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();
        jsonData.value = data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style scope>
.lTableCon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.lTableGrid {
    display: grid;
    background-color: var(--mainTextColor);
    grid-template-rows: auto;
    grid-template-columns: repeat(5, 1fr);
    color: black;
    height: 500px;
    width: 1200px;
    overflow-y: scroll;
    text-align: center;
}

.lTableGridItem {
    border-right-color:black;
    border-left-color:black;
    border-right-style: solid;
    border-left-style: solid;
}

.clubColumn {
}
</style>
