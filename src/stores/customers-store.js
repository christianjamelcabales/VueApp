
import { defineStore } from 'pinia'
import { myAxios } from '../composables/axios'


export const useCustomersStore = defineStore('CustomersStore', {
  state: () => {
    return{
        singleData: {
        firstname: null,
        lastname: null,
        email: null
      },
      updatedData: {
        firstname: null,
        lastname: null,
        email: null
      },
      allData:[]
    }
  },

  actions: {

    //POST DATA
    async addData(){
      try {
        const data = await myAxios.post('/customers/', this.singleData)
        console.log(data.data)
        console.log('New Data Successfuly Posted')
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },

    // GET ALL DATA
    async getData(){
      try {
        const data = await myAxios.get('/customers/')
        this.allData = data.data
      } catch (error) {
        console.log(error)
      }
     },

     //GET DATA BY ID
    /* async getPost(id){
      try {
        const data = await axios.get('/blogs/' + id)
        this.singlepost = data.data
      } catch (error) {
        
      }
    }, */

    //UPDATE DATA
     async updateData(row){
      try {
        const data = await myAxios.patch('/customers/' + row._id, this.singleData)
        console.log(data.data)
        console.log('Data Successfuly Updated')
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },

    //DELETE DATA
    async deleteData(row){   
      try {
        const data = await myAxios.delete('/customers/' + row._id)
        console.log('Data Successfuly Deleted')
        this.getData()
      } catch (error) {
        
      }
    },

    clickrow(data){
      this.singleData.firstname = data.firstname
      this.singleData.lastname = data.lastname
      this.singleData.email = data.email
    }

  },
})

