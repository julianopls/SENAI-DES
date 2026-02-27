void main(){
    String texto = "Hello World";
    int numero = 9999999999999999;
    double n = 0.333333;
    bool ativo = false;
    var coisa = 10;
    dynamic tudo = "Hello";
    
        print(texto);
        print(numero);
        print("Real = "+n.toString());
        print(ativo?"Hello":"Bye");
        print(coisa);
        print(tudo);
        tudo = 500;
        print(tudo);
}