      
       var a1  = document.getElementById("a1")
       var a2 = document.getElementById("a2")
       var a3 = document.getElementById("a3")
       var a4 = document.getElementById("a4")
       var a5 = document.getElementById("a5")
       var a6 = document.getElementById("a6")
       var a7 = document.getElementById("a7")
       var a8 = document.getElementById("a8")
       var a9 = document.getElementById("a9")
       var a0 = document.getElementById("a0")
       var add = document.getElementById("add")
       var sub = document.getElementById("sub")
       var multi = document.getElementById("multi")
       var div = document.getElementById("div") 
       var Zero = document.getElementById("Zero")
       var AC = document.getElementById("AC")
       var CD= document.getElementById("CD")
       var dot = document.getElementById("dot")
       var mod= document.getElementById("mod")
       var input= document.getElementById("input")
       var Sum = document.getElementById("Sum")


       a1.addEventListener("click",() => {
        input.value += a1.value;
       })

        a2.addEventListener("click",() => {
        input.value += a2.value;
       })

        a3.addEventListener("click",() => {
        input.value += a3.value;
       })

        a4.addEventListener("click",() => {
        input.value += a4.value;
       })

        a5.addEventListener("click",() => {
        input.value += a5.value;
       })

        a6.addEventListener("click",() => {
        input.value += a6.value;
       })

        a7.addEventListener("click",() => {
        input.value += a7.value;
       })

        a8.addEventListener("click",() => {
        input.value += a8.value;
       })

        a9.addEventListener("click",() => {
        input.value += a9.value;
       })

        a0.addEventListener("click",() => {
        input.value += a0.value;
       })

        add.addEventListener("click",() => {
        input.value += add.value;
       })

        sub.addEventListener("click",() => {
        input.value += sub.value;
       })

        multi.addEventListener("click",() => {
        input.value += multi.value;
       })

        div.addEventListener("click",() => {
        input.value += div.value;
       })

        Zero.addEventListener("click",() => {
        input.value += Zero.value;
       })

        AC.addEventListener("click",() => {
       //  input.value =AC.value;
       //  input.value =0;
       input.value=" ";
       })

        CD.addEventListener("click",() => {
        remove=input.value
        var s= remove.slice(0,-1)
        input.value=s;
       })

       
        dot.addEventListener("click",() => {
        input.value += ".";
       })

        mod.addEventListener("click",() => {
        input.value += "%";
       })

        Sum.addEventListener("click",() => {
        input.value =eval(input.value);
       })
