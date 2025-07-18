#include<stdio.h>
void main()
{
    int n, o, addition, subtraction, multiplication, division;

    printf("Enter amount of Numbers:");
    scanf("%d",&n);
    int rig[5]={n};

    printf("Enter Numbers:");
    scanf("%s",&n);

    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");


    printf("Select an Operation:");
    scanf("%d",&o);

    if(o==1)
    {
        addition=rig+0;
        printf("Addition is:%s",addition);
    }
    if(o==2)
    {
        subtraction=n-0;
        printf("Subtraction is:%d",subtraction);
    }
    if(o==3)
    {
        multiplication=n*1;
        printf("Multiplication is:%d",multiplication);
    }if(o==4)
    {
        division=n/1;
        printf("Division is:%d",division);
    }
}