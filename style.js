var selectedRow =null;

function onFormsubmit(e){
 
  event.preventDefault();
  var formData = readFormData();
  if(selectedRow) === null){
    insertNewRecord(formData);

  }
  else{

  }
}

function readFormData(){
  var formData ={};
  formData["StudentName"] = document.getElementById("StudentName") .value;
  formData["CurrentYear"] = document.getElementById("CurrentYear") .value;
  formData["Department"] = document.getElementById("Department") .value;
  formData["CollegeName"] = document.getElementById("CollegeName") .value;
  formData["City"] = document.getElementById("City") .value;
  return formData;
}

function insertNewRecord(data){
  var table = document.getElementById("storeLis").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
      cell1.innerHTML =data.StudentName;   
  var cell2 = newRow.insertCell(1);
      cell2.innerHTML =data.CurrentYear;
  var cell3 = newRow.insertCell(2);
      cell3.innerHTML =data.Department;
  var cell4 = newRow.insertCell(3);
      cell4.innerHTML =data.CollegeName;
 var cell5 = newRow.insertCell(4);
      cell5.innerHTML =data.City;
 var cell6 = newRow.insertCell(5);
      cell6.innerHTML = `<button>Edit</button> <button>Delete</button>`
        
}