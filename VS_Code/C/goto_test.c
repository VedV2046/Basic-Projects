#include<Stdio.h>
void main()
{
    int n;
    printf("Enter Number:");
    scanf("%d",&n);
    printf("Hello!\n");
    ABC:
    printf("Hi!\n");
    if(n>10){
        goto ABC;
    }
    printf("Welcome to goto_test");
}