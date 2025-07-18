#include<stdio.h>
void main()
{
    float a,b,o, addition, subtraction, multiplication, division;

    printf("Enter First number:");
    scanf("%f",&a);

    printf("Enter Second number:");
    scanf("%f",&b);

    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");


    printf("Select an Operation:");
    scanf("%f",&o);

    if(o==1)
    {
        addition=a+b;
        printf("Addition is:%f",addition);
    }
    if(o==2)
    {
        subtraction=a-b;
        printf("Subtraction is:%f",subtraction);
    }
    if(o==3)
    {
        multiplication=a*b;
        printf("Multiplication is:%f",multiplication);
    }if(o==4)
    {
        division=a/b;
        printf("Division is:%f",division);
    }
}