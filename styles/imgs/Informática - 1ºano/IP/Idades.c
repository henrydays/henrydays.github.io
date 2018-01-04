#include<stdio.h>
int main()
{
    int idade;
    printf("Coloque a idade: \n");
    scanf("%d", &idade);

if (idade < 5)
    printf("Bebe\n");
else if (idade >= 5 && idade <= 10)
    printf("Crianca\n");
else if (idade >= 10 && idade <= 18)
    printf("Adolescente\n");
else if (idade >= 18 && idade <= 50)
    printf("Adulto\n");
else
    printf("Velho\n");
}
