<script setup>

import { useCustomersStore } from '../stores/customers-store';

  const customers = useCustomersStore()
  customers.getData()

</script>

<template>
  <div class="home">
    
    <h1>Customers</h1>

    <div class="row">
      <div class="col"><label for="" >First Name </label></div>
      <div class="col"><input type="text" v-model="customers.singleData.firstname"></div>
    </div>
    <div class="row">
      <div class="col"><label for="">Last Name </label></div>
      <div class="col"><input type="text" v-model="customers.singleData.lastname"></div>
    </div>
    <div class="row">
      <div class="col"><label for="">Email </label></div>
      <div class="col"><input type="email" v-model="customers.singleData.email"></div>
    </div>
    <hr>
    <button type="button" @click="customers.addData">Save</button>
    <hr>

    <table border="1">
        <thead>
        <tr>
        <th>firstname</th>
        <th>lastname</th>
        <th>emails</th>
        <th colspan="2"></th>
       </tr>
      </thead>
      <tbody>
        <tr v-for="data in customers.allData" @click="customers.clickrow(data)">
            <td> {{ data.firstname }} </td>
            <td> {{ data.lastname }} </td>
            <td> {{ data.email }} </td>
            <td>
              <button type="button" @click="customers.updateData(data)">Update </button>
            </td>
            <td>
              <button type="button" @click="customers.deleteData(data)">Delete </button> 
            </td>
          </tr>
      </tbody>
    
    </table>


  </div>
</template>
