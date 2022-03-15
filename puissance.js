//fonction qui calcul la puissance d'un nombre
function calculpuissance(base,exposant){
 //si l'exposant donnée est 0
    if(exposant == 0){
        return 1;
    }
 //si l'exposant donnée est 1 
    if(exposant == 1){
        return base;
    }
 //si l'exposant est superieur ou egale à 2 , on appel à nouveau la fonction qui calcul la puissance
    if(exposant>= 2){
        return base*calculpuissance(base,(exposant-1))
    }
} 

console.log(calculpuissance(5,3))