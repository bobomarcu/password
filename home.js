function done(){
    var cuv1 = document.getElementById('cuv1').value
    cuv2 = document.getElementById('cuv2').value,
    number = document.getElementById("cl").value,
    output = []
   
        const ar = Array.from(cuv1);
        console.log(ar);
        const ar2 = Array.from(cuv2);


        var r1 = ar.length;
   
        var r2 = ar2.length;

            var random = Math.floor(Math.random()*r1)
            var plm = ar[random];
            console.log(random)
          console.log(plm);


            var random2 = Math.floor(Math.random()*r2)
            var plm2 = ar2[random2];
            for( var i = 0 ; i<1; i+=1){
                output.push(plm)
            }
            
            for( var j = 0 ; j<1; j+=1){
                output.push(plm2)
            }
            var str2 = "1234567890";
            const ar4 = Array.from(str2);
            var r4 = ar4.length;
            var random4 = Math.floor(Math.random()*r4)
            var plm4 = ar4[random4];
           
            for(var m = 0 ; m<1;m+=1){
                output.push(plm4)
            }

            var str5 = "!@#$%^&*(){}';|/?><.,`≈ç√∫∫µ˜∫…¬˚∆˙©å∂ß®∑ˆœπ∑´ˆ¨¥®±§";
            const ar5 = Array.from(str5);
            var r5 = ar5.length;
            var random5 = Math.floor(Math.random()*r5)
            var plm5 = ar5[random5];
           
            for(var n = 0 ; n<1;n+=1){
                output.push(plm5)
            }
            var len = number-4
            for(var k = 0;k< len;k++){
                var str ="ABCDEFGHIJKLMMOPQRSTVXYZ1234567890!@#$%^&*()";
                const ar3 = Array.from(str);
                var r3 = ar3.length;
                var random3 = Math.floor(Math.random()*r3)
                var plm3 = ar3[random3];
                output.push(plm3)
            }
            var final = output.join('')
            console.log(final);

            document.getElementById('rez').innerHTML = final;


            $('#rez').fadeIn(900);
} 