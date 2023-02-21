
import { defineStore } from 'pinia'

export const useAdminsStore = defineStore('AdminsStore', {
  state: () => {
    return{
      firstname: null,
      lastname: null,
      email: null
    }
  },

  actions: {
    async addData(){       
      try {
        const data = await axios.post('/blogs/', this.newPost)
        console.log(data.data)
        console.log('New Blog Successfuly Posted')
      } catch (error) {
        console.log(newPost.title)
      }
    }
  },
})

