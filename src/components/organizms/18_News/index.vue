<template lang='pug'>
  #news.grid
    h3.head Новости нашего Бюро
    .content
      .newsCard(
        v-for='article in articles'
        :key='article.id'
        )
        img(:src='article.photo')
        .textBlock
          p.date {{ article.date }}
          h3 {{ article.h3 }}
          p.desc {{ article.description }}
          p {{ article.inner }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
