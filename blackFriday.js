// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

//     5% para produtos abaixo de R$ 200,00

//     10% para produtos abaixo de R$ 400,00

//     15% para produtos abaixo de R$ 2000,00

//     20% para produtos acima de R$ 2000,00

//     Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

//     Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

const mostBoughtProducts = [2100,720,400,330,550,600,120,220,480,4500];

const productsAfterDiscount = mostBoughtProducts.map((prod) => {
  return prod < 200 ? prod-prod*0.05 :
    prod < 400 ? prod-prod*0.1 :
    prod < 2000 ? prod-prod*0.15 :
    prod > 2000 ? prod-prod*0.2 : prod;
});