<template>
  <form>
    <div class="grid-x grid-margin-x align-center">
      <div class="cell small-4">
        <label>買ったもの
          <input
            v-model="item"
            type="text">
        </label>
      </div>
      <div class="cell small-4">
        <label>値段
          <input
            v-model="price"
            type="text">
        </label>
      </div>
    </div>
    <div class="grid-x grid-margin-x align-center">
      <button
        type="button"
        @click.prevent="save()"
        class="success button">記録
      </button>
    </div>
    <div>item:{{ item }}</div>
    <div>price:{{ price }}</div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    item: {
      get () {
        return this.$store.state.revenue.item
      },
      set (value) {
        this.setItem(value)
      }
    },
    price: {
      get () {
        return this.$store.state.revenue.price
      },
      set (value) {
        this.setPrice(value)
      }
    }
  },
  methods: {
    ...mapActions(['setItem', 'setPrice', 'save'])
  }
}
</script>
