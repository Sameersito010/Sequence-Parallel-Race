let cl=console.log;

enum enumproduct{
order,
book,
ship,
delivery,
cancel
}



type product={
    model:string,
    price:number,
    state:enumproduct
}


let product1:product={
    model:"redmi",
    price:10000,
    state:enumproduct.order
}

cl(product1)

let x=100