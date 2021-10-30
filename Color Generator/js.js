
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    const colorView = document.querySelector('.ViewColor');
    const colorText = document.querySelector('.colorHex');
    const text = document.querySelector('.text');

    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");

    /* Generate */

    button1.addEventListener("click" ,  function(){

                                                    let hexColor = "#";

                                                    for(let i=0; i<6; i++)
                                                        hexColor += hex[Math.floor( Math.random() * hex.length ) ];
                                                                                

                                                    colorText.textContent = hexColor;

                                                    colorView.style.backgroundColor = hexColor;   });

    /* View */

    button2.addEventListener("click" ,  function(){ 
                                                    
                                                    colorView.style.backgroundColor = text.value; 
                                                    colorText.textContent = "#ffffff";});

