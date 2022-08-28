const chartData = {
    y : []
};

function graficar()
{
    let a  = document.getElementById('formulario__inputa').value;
    let b  = document.getElementById('formulario__inputb').value;
    let c  = document.getElementById('formulario__inputc').value;
    
    let x = [];
    let w = [];
    let ec = a*Math.pow(x,2)+b*x+c;
    let ec2 = -b / (2*a);
    
    x = [ec2-2, ec2-1, ec2, ec2+1, ec2+2];
    for(let z = 0 ; z < 5; z++)
    {
    w[z] = (a*Math.pow(x[z],2))+(b*x[z]);
     chartData.y[z] = (w[z]) - ((c)*-1);
     console.log( chartData.y[z]);
     
    }


    let ctx = document.getElementById("chart");
    let data = {
        labels: [ -3, -2, -1, 0, 1, 2, 3],
        datasets: [{
            label: "f(x) = ax^2+bx+c",
            borderColor: "rgba(153, 102, 255, 1)",
            data: chartData.y,
            fill: false
        }]
    };
    let myBarChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
   
}

function calcular()
{
    
let raiz1, raiz2;

let a  = document.getElementById('formulario__inputa').value;
let b  = document.getElementById('formulario__inputb').value;
let c  = document.getElementById('formulario__inputc').value;


let discriminante = (b * b) - (4 * a * c);

    if(discriminante > 0)
    {
        raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        graficar();
        
    
       alert(`La raiz cuadratica de la ecuacion seria: ${raiz1} y ${raiz2}`);
    }
    else if (discriminante == 0)
    {
        raiz1 = raiz2 = -b / (2 * a);
        graficar();
       alert(`La raiz cuadratica de la ecuacion seria: ${raiz1} y ${raiz2}`);
    }
    else
    {
        let parteReal = (-b / 2 * a);
        let parteImaginaria = (Math.sqrt(-discriminante) / (2 * a));
       
    alert(`La raiz cuadratica de la ecuacion seria: ${parteReal} + ${parteImaginaria}i  y ${raiz1} y ${raiz2}`);
    }
}





