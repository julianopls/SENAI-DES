import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const SimuladorFinanciamento(),
    );
  }
}

class SimuladorFinanciamento extends StatefulWidget {
  const SimuladorFinanciamento({super.key});

  @override
  State<SimuladorFinanciamento> createState() => _SimuladorFinanciamentoState();
}

class _SimuladorFinanciamentoState extends State<SimuladorFinanciamento> {
  final TextEditingController valorController = TextEditingController();
  final TextEditingController parcelasController = TextEditingController();
  final TextEditingController jurosController = TextEditingController();
  final TextEditingController taxasController = TextEditingController();

  double parcela = 0;
  double total = 0;

  void calcular() {
    double valor = double.tryParse(valorController.text) ?? 0;
    int parcelas = int.tryParse(parcelasController.text) ?? 0;
    double juros = (double.tryParse(jurosController.text) ?? 0) / 100;
    double taxas = double.tryParse(taxasController.text) ?? 0;

    double valorFinal = valor + taxas;

    if (parcelas > 0 && juros > 0) {
      double pmt = valorFinal *
          (juros * pow(1 + juros, parcelas)) /
          (pow(1 + juros, parcelas) - 1);

      setState(() {
        parcela = pmt;
        total = pmt * parcelas;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Simulador de Financiamento"),
        centerTitle: true,
        backgroundColor: Colors.red,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: valorController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Valor do bem",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 10),

            TextField(
              controller: parcelasController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Número de parcelas",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 10),

            TextField(
              controller: jurosController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Taxa de juros (%)",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 10),

            TextField(
              controller: taxasController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Taxas adicionais (R\$)",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: calcular,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                minimumSize: const Size(double.infinity, 50),
              ),
              child: const Text("Calcular"),
            ),

            const SizedBox(height: 20),

            Text(
              "Parcela: R\$ ${parcela.toStringAsFixed(2)}",
              style: const TextStyle(fontSize: 18),
            ),

            Text(
              "Total: R\$ ${total.toStringAsFixed(2)}",
              style: const TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}