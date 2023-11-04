<template>
  <div class="blog-editor--classify">
    <h3>分类</h3>
    <ul class="blog-editor--select">
      <!-- {{#each list}}
          <li data-column="{{_id}}" class="{{#if selected}}selected{{/if}}">
            {{ name }}
          </li>
          {{/each}} -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "EditorClassify",
};
</script>

<style lang="stylus">
@import '@/assets/css/base.styl';

.blog-editor--classify {
  display: flex;
  align-items: center;
  margin-top: margin-space * 2;

  h3 {
    font-size: 18px;
    line-height: font-size-h;
    margin-right: margin-space * 2;
  }
}
</style>