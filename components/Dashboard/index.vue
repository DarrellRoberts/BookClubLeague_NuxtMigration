<template>
    <div class="lTableCon">
    <div class="lTableGrid">
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Position</h2>
        <div v-if=!pending>
          <div v-for="(item, index) in jsonData" :key="item.id">
              <h2>{{ index + 1 }}</h2>
          </div>
        </div>
        <div v-else>Loading...</div>
      </div>
      <div class="lTableGridItem clubColumn">
        <h2 class="underline" id="tableTitles">Book Club</h2>
        <div v-if=!pending>
          <div v-for="name in jsonData" :key="name.id">
              <h2>{{ name.title }}</h2>
          </div>
      </div>
        <div v-else>Loading...</div>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Created in</h2>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Members</h2>
      </div>
      <div class="lTableGridItem">
        <h2 class="underline" id="tableTitles">Books read</h2>
      </div>
    </div>
    </div>
</template>

<script setup>
import { useLazyAsyncData } from 'nuxt/app';
const { data: jsonData, pending} = useLazyAsyncData(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})
</script>

<style scope>
.lTableCon {
    display: flex;
    justify-content: center;
    align-items: center;
}

#tableTitles {
  background: var(--bgColor);
  font-size: 2.25rem;
  color: var(--mainTextColor);
  font-family: var(--mainFont);
  text-shadow: 2px 2px 0px var(--secondTextColor);
}

.lTableGrid {
    display: grid;
    background-color: var(--mainTextColor);
    grid-template-rows: auto;
    grid-template-columns: repeat(5, 1fr);
    color: black;
    height: 500px;
    width: 1200px;
    border-radius: 20px;
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
