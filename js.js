w = Number(prompt("Nhập cân nặng",''));
h = Number(prompt("Nhập chiều cao",''));
bmi = w/(h*h);
if(bmi>=30){
    alert("Obese!");
}
else if (bmi<30 &&bmi>=25){
    alert("OverWeight");
}
else if(bmi<25&&bmi>=18.5){
    alert("Normal");
}
else {
    alert("UnderWeight");
}