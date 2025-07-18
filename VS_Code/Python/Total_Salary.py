Basic_Pay=int(input("Enter Basic Pay:"));

HRA=Basic_Pay*(10/100);
TA=Basic_Pay*(5/100);

Gross_Salary=Basic_Pay+HRA+TA;

Professional_Tax=Gross_Salary*(2/100);

Net_Salary=Gross_Salary-Professional_Tax;
print("Net Salary is:",Net_Salary);