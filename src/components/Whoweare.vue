<template>
  <style>
    
    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 1rem;
      background-color: #f5f5f5; 
      border-collapse: collapse;
    }
    .table thead th {
      background-color: #007bff;
      color: white; 
    }
    .table tbody tr {
      background-color: #fff; 
    }
    .table tbody tr:nth-child(odd) {
      background-color: #e9f5ff;
    }
    .table th,
    .table td {
      padding: 0.75rem;
      text-align: left;
    }
  </style>

  
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>
