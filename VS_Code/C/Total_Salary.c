#include<stdio.h>
void main()
{ 
    int Basic_Salary, HRA, DRA, Total_Salary;

    printf("Enter Basic Salary:");
    scanf("%d",&Basic_Salary);

    HRA=Basic_Salary*20/100;
    DRA=Basic_Salary*150/100;

    Total_Salary=Basic_Salary+HRA+DRA;

    printf("Total Salary is:" "%d",Total_Salary);
}