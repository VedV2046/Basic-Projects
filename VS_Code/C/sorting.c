#include<stdio.h>
#define SIZE 5

//bubble sort
void bubbleSort(float price[], int n) {
    int i,j;
    float temp;

    for(i=0; i<n-1; i++) {
        for(j=0; j<n-i-1; j++) {
            if(price[j] > price[j+1]) {
                temp = price[j];
                price[j] = price[j+1];
                price[j+1] = temp;
            }
        }
    }
}

//Selection Sort
void selectionSort(float price[], int n) {
    int i,j,min_index;
    for(i = 0; i< n-1; i++) {
        min_index = i;
        for(j= i + 1; j<n; j++) {
            if(price[j] < price[min_index]) {
                min_index = j;
            }
        }
        float temp = price[i];
        price[i] = price[min_index];
        price[min_index] = temp;
    }
}

//Insertion Sort
void insertionSort(float prices[], int n) {
    int i, j;
    float key;

    for(i=1; i<n; i++) {
        key = prices[i];
        j=i-1;
        while(j>=0 && prices[j]>key) {
            prices[j+1] = prices[j];
            j--;
        }
        prices[j+1] = key;
    }
}

//Display array
void display(float prices[], int n) {
    int i;
    for(i=0; i<n; i++) {
        printf("%.2f ", prices[i]);
    }
    printf("\n");
}

int main(){
    float prices[SIZE] = {199.99, 49.50, 89.90, 299.00, 150.00};
    int choice;

    printf("Original Prices: ");
    display(prices, SIZE);

    printf("\nChoose Sorting Method:\n");
    printf("1. Bubble Sorting\n");
    printf("2. Selection Sorting\n");
    printf("3. Insertion Sorting\n");

    printf("Enter Your Choice (1-3): ");
    scanf("%d",&choice);

    if(choice == 1) {
        bubbleSort(prices, SIZE);
        printf("Prices after Bubble Sort: ");
    }
    else if(choice == 2) {
        selectionSort(prices, SIZE);
        printf("Prices after Selection Sort: ");
    }
    else if (choice == 3) {
        insertionSort(prices, SIZE);
        printf("Prices after Insertion Sort: ");
    }
    else {
        printf("Invalid Choice\n");
        return 0;
    }

    display(prices, SIZE);
    return 0;
}
