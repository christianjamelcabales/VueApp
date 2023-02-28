<script setup>



import { useAdminsStore } from '../stores/admins-store';
const myPath = import.meta.env.VITE_path;

  const admins = useAdminsStore()
  admins.getData()

  const onFileSelected = (e) => {
    const file = e.target.files[0];
    admins.singleData.file = file
  }


</script>

<template>
  <div class="home">
    
    <h1>Admins</h1>
    <form @submit.prevent="admins.onSubmit" enctype="multipart/form-data">
    <div class="row">
      <div class="col"><label for="" >First Name </label></div>
      <div class="col"><input type="text" v-model="admins.singleData.firstname"></div>
    </div>
    <div class="row">
      <div class="col"><label for="">Last Name </label></div>
      <div class="col"><input type="text" v-model="admins.singleData.lastname"></div>
    </div>
    <div class="row">
      <div class="col"><label for="">Email </label></div>
      <div class="col"><input type="email" v-model="admins.singleData.email"></div>
    </div>
    <div class="row">
      <div class="col"><label for="">Avatar </label></div>
      <div class="col"><input type="file" @change="onFileSelected"></div>
    </div>
    <hr>

    <button type="submit" @click="">Save</button>
    <hr>
  </form>

    <table border="1">
        <thead>
        <tr>
          <th></th>
        <th>firstname</th>
        <th>lastname</th>
        <th>email</th>
        <th colspan="2"></th>
       </tr>
      </thead>
      <tbody>
        <tr v-for="data in admins.allData" @click="admins.clickrow(data)">
            <td> <img style="height: 50px;  width: 50px;" v-bind:src="myPath + data.file" alt="picture"> </td>
            <td> {{ data.firstname }} </td>
            <td> {{ data.lastname }} </td>
            <td> {{ data.email }} </td>

            <td>
              <button type="button" @click="admins.updateData(data)">Update </button>
            </td>
            <td>
              <button type="button" @click="admins.deleteData(data)">Delete </button> 
            </td>
          </tr>
      </tbody>
    
    </table>


  </div>
</template>
