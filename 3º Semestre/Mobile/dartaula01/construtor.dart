class Animal {
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;

    Animal(this.id, this.nome, this.especie,this.raca, this.peso);

    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){

    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
   

    print(boi.tudoJunto());

}