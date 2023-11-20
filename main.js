let creTr = document.getElementById('creTr');
let creTd = document.getElementById('creTd');
let textTr = document.getElementById('textTr');
let textTd = document.getElementById('textTd');
let btn = document.getElementById('btn');

btn.addEventListener('click', myTable);


function myTable(){
    
    
    if(creTr != '' && creTd != '' && textTr != '' && textTd != ''){
        let body = document.body;
        let table = document.createElement('table');
        for (let i = 0; i < +creTr.value; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = textTr.value;
            textTr.value++;
            table.appendChild(tr);
            for (let j = 0; j < +creTd.value; j++) {
                let td = document.createElement('td');
                td.innerHTML = textTd.value;
                tr.appendChild(td);
            }
        }
        body.appendChild(table);
        creTr.value = '';
        creTd.value = '';
        textTr.value = '';
        textTd.value = '';
    }
}