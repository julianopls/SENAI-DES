import 'package:flutter/material.dart';

void main() {
  runApp(MeuApp());
}

class MeuApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Investimento',
      home: TelaInvestimento(),
    );
  }
}

class TelaInvestimento extends StatefulWidget {
  @override
  _TelaInvestimentoState createState() => _TelaInvestimentoState();
}

class _TelaInvestimentoState extends State<TelaInvestimento> {
  final TextEditingController valorController = TextEditingController();
  final TextEditingController mesesController = TextEditingController();
  final TextEditingController jurosController = TextEditingController();

  double totalSemJuros = 0;
  double totalComJuros = 0;

  void calcular() {
    double valor = double.tryParse(valorController.text) ?? 0;
    int meses = int.tryParse(mesesController.text) ?? 0;
    double juros = (double.tryParse(jurosController.text) ?? 0) / 100;

    // Sem juros
    totalSemJuros = valor * meses;

    // Com juros compostos (acumulando mês a mês)
    totalComJuros = 0;
    double montante = 0;

    for (int i = 0; i < meses; i++) {
      montante = (montante + valor) * (1 + juros);
    }

    totalComJuros = montante;

    setState(() {});
  }

  void limpar() {
    valorController.clear();
    mesesController.clear();
    jurosController.clear();

    totalSemJuros = 0;
    totalComJuros = 0;

    setState(() {});
  }

  Widget campoTexto(String label, TextEditingController controller) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: TextField(
        controller: controller,
        keyboardType: TextInputType.number,
        decoration: InputDecoration(
          labelText: label,
          border: OutlineInputBorder(),
        ),
      ),
    );
  }

  Widget resultado(String texto, double valor) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: Text(
        "$texto: R\$ ${valor.toStringAsFixed(2)}",
        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Simulador de Investimento"),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            campoTexto("Valor mensal (R\$)", valorController),
            campoTexto("Número de meses", mesesController),
            campoTexto("Taxa de juros (%)", jurosController),

            SizedBox(height: 10),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: calcular,
                  child: Text("Calcular"),
                ),
                ElevatedButton(
                  onPressed: limpar,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                  child: Text("Limpar"),
                ),
              ],
            ),

            SizedBox(height: 20),

            resultado("Total sem juros", totalSemJuros),
            resultado("Total com juros", totalComJuros),
          ],
        ),
      ),
    );
  }
}