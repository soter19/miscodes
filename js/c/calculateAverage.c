#include <stdio.h>
#include <stdlib.h>

float MediaComPesos(float a,float b,float ap,float bp){
	float peso = ap+bp;
	float result = ((a*ap)+(b*bp))/peso;

	return result;
}

int main(){
	float a,b,ap,bp,media;
	
	printf ("Digite as duas notas e os dois pesos, respectivamente:\n");
	scanf ("%f%f%f%f", &a, &b, &ap, &bp);
	media = MediaComPesos(a,b,ap,bp);
	printf ("A média de a e b %f \n ", media);
	return media;
}
