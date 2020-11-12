let array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
let output = document.getElementById('output');
let bar__index = document.getElementById('bars__index'); 
for (let i = 0; i < array.length; i++) {
    if(array[i]>=1){
        output.innerHTML += array[i] + '<br>';
    }    
}
for (let y = 0; y < array.length; y++) {
    if(array[y]>0){
        bar__index.innerHTML += y + ' ';
        
    }
}
(function(document){
    let __bars = [].slice.call(document.querySelectorAll('.bar-inner , .bar-inner1, .bar-inner2, .bar-inner3,.bar-inner4,.bar-inner5,.bar-inner6,.bar-inner7,.bar-inner8,.bar-inner9,.bar-inner10,.bar-inner11,.bar-inner12,.bar-inner13,.bar-inner14,.bar-inner15,.bar-inner16,.bar-inner17,.bar-inner18,.bar-inner19'));

    __bars.map(function(bar,index){
        setTimeout(function(){
            bar.style.width = bar.dataset.percent;
        }, index * 300);
    })
})(document);

    

