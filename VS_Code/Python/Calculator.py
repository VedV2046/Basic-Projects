a=(input("Enter First Number:"));
a=int(a)

b=(input("Enter Second Number:"));
b=int(b)

print("\n1.Addition");
print("2.Subtraction");
print("3.Multiplication");
print("4.Division");

operation=(input("\nSelcet Operation:"));
operation=int(operation)

addition=a+b
subtraction=a-b
multiplication=a*b
division=a/b

if(operation==1):
    print("\nAddition is:",addition)
       
if(operation==2):
    print("\nSubtraction is:",subtraction)

if(operation==3):
    print("\nMultiplication is:",multiplication)
    
if(operation==4):
    print("\nDivision is:",division)

if(operation>4):
    print("\nIncorrect Selection!")