#include<stdio.h>
void main ()
{
    int A, B,C;

    printf("Enter no. A:");
    scanf("%d",&A);

    printf("Enter no. B:");
    scanf("%d",&B);

    printf("Enter no. C:");
    scanf("%d",&C);

    if(A>B && A>C) 
    {
        printf("A Greater Than B and C\n");
    }
    else if (B>A && B>C)
    {
        printf("B is Greater than A and C\n");
    }
    if (C>A && C>B)
    {
        printf("C is Greater than A and B\n");
    
    } 
}