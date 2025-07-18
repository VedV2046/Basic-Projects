#include<stdio.h>
void main()
{
    int num1, num2, addition, subtraction, multiplication, division, modulus;
    printf("Enter First number:");
    scanf("%d",&num1);

    printf("Enter Second number:");
    scanf("%d",&num2);

    addition=num1+num2;
    subtraction=num1-num2;
    multiplication=num1*num2;
    division=num1/num2;
    modulus=num1%num2;

    printf("Addition=%d\n",addition);
    printf("Subtraction=%d\n",subtraction);
    printf("Multiplication=%d\n",multiplication);
    printf("Division=%d\n",division);
    printf("Modulus=%d\n",modulus);

}