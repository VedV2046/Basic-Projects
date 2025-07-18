#include <stdio.h>
void main() 
{
    int a=5, b=4, temp;

    printf("Numbers before swapping: a=%d b=%d\n",a,b);

    temp=a;
    a=b;
    b=temp;

    printf("Numbers after swapping: a=%d b=%d",a,b);
}
