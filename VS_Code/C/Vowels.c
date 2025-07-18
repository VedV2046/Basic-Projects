#include <stdio.h>
void main() 
{
    char ch;

    printf("Enter character:");
    scanf("%c",&ch);

    switch(ch)
    {   
        case 'a':
        printf("You entered vowels");
        break;

        case 'e':
        printf("You entered vowels");
        break;

        case 'i':
        printf("You entered vowels");
        break;

        case 'o':
        printf("You entered vowels");
        break;

        case 'u':
        printf("You entered vowels");
        break;

        default:
        printf("You entered consonats");
        break;
    }
} 