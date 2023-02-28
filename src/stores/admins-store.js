
import axios from 'axios'
import { defineStore } from 'pinia'
import { myAxios } from '../composables/axios'


export const useAdminsStore = defineStore('AdminsStore', {
  state: () => {
    return{
        singleData: {
        firstname: null,
        lastname: null,
        email: null,
        file: null,
        filename: null
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
    
    //POST DATA WITHOUT IMAGE
   /* async addData(){
      try {
        const data = await myAxios.post('/admins/', this.singleData)
        console.log(data.data)
        console.log('New Data Successfuly Posted')
        console.log(this.singleData.file)
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },*/

    //POST DATA WITH IMAGE
    async onSubmit() {
      const formData = new FormData()
      
      formData.append('file',this.singleData.file)
      formData.append('firstname',this.singleData.firstname)
      formData.append('lastname',this.singleData.lastname)
      formData.append('email',this.singleData.email)

      try {
        await myAxios.post('/admins/', formData)
        this.getData()
        console.log('Uploaded')
        
      } catch (error) {
        console.log(error)
      }
    },
  
    // GET ALL DATA
    async getData(){
      try {
        const data = await myAxios.get('/admins/')
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
        const data = await myAxios.patch('/admins/' + row._id, this.singleData)
        console.log(data.data)
        console.log('Admin Successfuly Updated')
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },

    //DELETE DATA
    async deleteData(row){   
      try {
        const data = await myAxios.delete('/admins/' + row._id)
        console.log('Admin Successfuly Deleted')
        this.getData()
      } catch (error) {
        
      }
    },









  
    clickrow(data){
      this.singleData.firstname = data.firstname
      this.singleData.lastname = data.lastname
      this.singleData.email = data.email
    },

  },
})

