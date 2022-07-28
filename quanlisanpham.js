let product =["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi 12" ];
function AllProduct (){
    let num="";
    for (i=0; i<product.length;i++){
        num+= "  <tr>" +
            "<td>"+ product[i] +"</td>" +
            "<td><button onclick='edit("+i+")'>Edit</button></td>" +
            "<td><button onclick='deleteBysp("+i+")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("listProduct").innerHTML=num;
    document.getElementById("number").innerText=product.length;
}
AllProduct();
function newproduct() {
    let newP = document.getElementById("creatProduct").value;
    product.push(newP);
    AllProduct();
}
function deleteBysp(index) {
    product.splice(index, 1);
    AllProduct();
}
function edit(index){
    product[index] = prompt('nhập vào');
    AllProduct();
}