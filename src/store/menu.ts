import {defineStore} from 'pinia'
import {ref} from 'vue'

export const userMenuStore = defineStore('userHome', () => {
    const isCollapse = ref(false)

    const changeCollapse = () => {
      isCollapse.value = !isCollapse.value
    }

    return {
      isCollapse,
      changeCollapse
    }

  }, {
    persist: true
  }
)

