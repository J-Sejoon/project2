//sum
const price = document.getElementsByName("form"),
      sell_price = document.form.sell_price,
      amount = document.form.amount,
      add = document.form.add,
      minus = document.form.minus,
      sum = document.form.sum;

if(price){
  sum.value = sell_price.value;

  let amountval = amount.value,
      sumval = sum.value,
      priceval = sell_price.value;

  if(add){
    add.addEventListener('click',function(){
      amountval++;
      sumval = amountval*priceval;
      amount.value=amountval;
      sum.value = sumval;
      console.log(amountval,sumval,priceval);
    })
  }
  if(minus){
    minus.addEventListener('click',function(){
      if(amountval > 1){
      amountval--;
      sumval = amountval*priceval;
      amount.value=amountval;
      sum.value = sumval;
      console.log(amountval,sumval,priceval);
    } else{
      amountval=1;    
    }
  })
  }
}