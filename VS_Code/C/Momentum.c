#include<stdio.h>
    int main()
    {
        int Mass, Vel, Momentum;

        printf("Enter Mass:");
        scanf("%d",&Mass);

        printf("Enter Vel:");
        scanf("%d",&Vel);

        Momentum=Mass*Vel*Vel;

        printf("Momentum is:""%d",Momentum);

        return 0;

    }