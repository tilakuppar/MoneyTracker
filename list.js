function transaction(a) {
    const description = document.getElementById('description');
    const amount = document.getElementById('amount');
    const listContainer = document.querySelector('.list');
    let li = document.createElement('li');
    if(a == 1){
        li.innerHTML = `${description.value} : ₹ +${amount.value} <i class="fa-solid fa-xmark dlt"></i>`;
    }
    else{
        li.innerHTML = `${description.value} : ₹ -${amount.value} <i class="fa-solid fa-xmark dlt"></i>`;

    }
    listContainer.appendChild(li);
    li.querySelector(".dlt").addEventListener('click', function(){
        li.remove();
    });
}
var amt=0;
var exp_amt=0;
function income(){
    let a=1;
    const description = document.getElementById('description').value;
    if(description==''){
        alert("Enter the Description");
    }
    else{    
        var amt_input=document.getElementById('amount');
        amt=amt+Number.parseInt(amt_input.value);
        document.getElementById('total_balance').innerText=`Total Balance : ₹ ${amt}`;
        document.getElementById('inc_amt').innerText=`₹ ${amt}`;
        transaction(a);
    }
}

function expense(){
    let a=0;
    const description = document.getElementById('description').value;
    if(description==''){
        alert("Enter the Description");
    }
    else{
        var amt_input=document.getElementById('amount');
        amt=amt-Number.parseInt(amt_input.value);
        document.getElementById('total_balance').innerText=`Total Balance : ₹ ${amt}`;
        exp_amt=exp_amt+Number.parseInt(amt_input.value);
        document.getElementById('exp_amt').innerText=`₹ ${exp_amt}`;
        transaction(a);
    }
}