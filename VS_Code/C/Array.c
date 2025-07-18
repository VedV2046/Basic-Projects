#include <stdio.h>
void main() 
{
 int arr[5], sum=0; 
 for(int x=0;x<=4;x++)
 {
    printf("Enter element:");
    scanf("%d",&arr[x]);
 }
 
 for(int y=0;y<=4;y++)
 {
    printf("%d\t",arr[y]); 
    sum=sum+arr[y];
 }
 
 printf("\nsum=%d",sum);
}