// teste 01
//. document.write(/[a-z]/i.test("xy"));

// document.write (/^\d{2}\/\d{2}\/\d{4}$/.
//     test('33/33/3333'));

// DATA
// var dia = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
// document.write(dia.test("31"))
 
//  var mes = /^(0[1-9]|1[0-2])$/;
//  document.write(mes.test("12"))

// var ano = /^\d(4)$/;
// document.write(ano.test("24"))

// CPF
// var cpf=/^([0-9]{3}\.[0-9]{3\-[0-9]{2}})$/;
// document.write(cpf.test("957.877.555-55"))

// E-MAIL

var Emails=/^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
document.write(Emails.test("email@empresa.com.br"))

const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const email = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
    function emailValidate(){
        if (email.test(inputs[0].value)){
            removeError(0);
        }
        else{
            setError(0);
        }
    }

    function setError(index){
        spans[index].style.display='block';
        spans[index].style.color='red';
    }

    function removeError(index){
        spans[index].style.display='none';
    }
    