#include<stdio.h>
void main()

{
    float Sub1, Sub2, Sub3, Sub4, Sub5, Percentage;

    printf("Enter Subject-1 Marks:");
    scanf("%f",&Sub1);

    printf("Enter Subject-2 Marks:");
    scanf("%f",&Sub2);

    printf("Enter Subject-3 Marks:");
    scanf("%f",&Sub3);

    printf("Enter Subject-4 Marks:");
    scanf("%f",&Sub4);

    printf("Enter Subject-5 Marks:");
    scanf("%f",&Sub5);

    Percentage=((Sub1+Sub2+Sub3+Sub4+Sub5)/100)*100;

    printf("Total Percentage is:""%f",Percentage);

    if (Percentage >= 75) {
    printf("\nDistinction\n");
}
else if (Percentage > 60 && Percentage < 75) {
    printf("\nFirst Division\n");
}
else if (Percentage > 50 && Percentage < 60) {
    printf("\nSecond Division\n");
}
else if (Percentage > 40 && Percentage < 50) {
    printf("\nThird Division\n");
}
else {
    printf("\nFailed\n");
}

}

