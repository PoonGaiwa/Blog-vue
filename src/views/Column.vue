<template>
  <div id="app" class="blog-column-words">
    <wordcloud
      :data="columnWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
      :fontSize="[40, 80]"
    >
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";
export default {
  name: "ColumnView",
  components: {
    wordcloud,
  },
  data() {
    return {
      columns: [],
      myColors: [
        "rgb(0,141,86)",
        "rgb(21,174,103)",
        "rgb(106,189,120)",
        "rgb(150,207,172)",
      ],
    };
  },
  created() {
    this.getColumns();
  },
  computed: {
    columnWords() {
      return this.columns.map((item) => {
        return {
          name: item.name,
          value: item.aid.length,
          id: item._id,
        };
      });
    },
  },
  mounted() {
    this.$EventBus.$on("updateView", () => {
      this.getColumns();
    });
  },
  beforeDestroy() {
    let aDiv = document.querySelectorAll(".tooltip");
    aDiv.forEach((item) => {
      item.remove();
    });
  },
  methods: {
    async getColumns() {
      try {
        let columns = await this.$api({ type: "columns" });
        this.columns = columns.data.list;
      } catch (err) {
        console.log(err);
      }
    },
    wordClickHandler(name) {
      let columnId = this.columns.find((item) => {
        return item.name === name;
      })._id;
      this.$router.push({ name: "index", query: { columnId } });
    },
  },
};
</script>

<style lang="stylus">
#app {
  svg {
    user-select: none;

    & text {
      cursor: pointer;
    }
  }
}
</style>