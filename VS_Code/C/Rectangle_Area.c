#include<stdio.h>
void main()
{
    float length, width, Area;

    printf("Enter Length:");
    scanf("%f",&length);

    printf("Enter Width:");
    scanf("%f",&width);

    Area=length*width;

    printf("The Area of Rectangle is:""%f",Area);
}