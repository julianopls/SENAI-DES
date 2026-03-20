
import 'package:flutter/material.dart';

void main() {
  runApp(const MeuApp());
}

class MeuApp extends StatelessWidget {
  const MeuApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Cálculo de Bitola',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const TelaPrincipal(),
    );
  }
}

class TelaPrincipal extends StatefulWidget {
  const TelaPrincipal({super.key});

  @override
  State<TelaPrincipal> createState() => _TelaPrincipalState();
}

class _TelaPrincipalState extends State<TelaPrincipal> {
  final TextEditingController correnteController = TextEditingController();
  final TextEditingController distanciaController = TextEditingController();

  double resultado110 = 0;
  double resultado220 = 0;

  void calcular() {
    double corrente = double.tryParse(correnteController.text) ?? 0;
    double distancia = double.tryParse(distanciaController.text) ?? 0;

    setState(() {
      resultado110 = (2 * corrente * distancia) / 294.64;
      resultado220 = (2 * corrente * distancia) / 510.4;
    });
  }

  void limpar() {
    correnteController.clear();
    distanciaController.clear();

    setState(() {
      resultado110 = 0;
      resultado220 = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cálculo de Bitola'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: correnteController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Corrente (A)',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 15),
            TextField(
              controller: distanciaController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Distância (m)',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),

            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: calcular,
                  child: const Text('Calcular'),
                ),
                ElevatedButton(
                  onPressed: limpar,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                  child: const Text('Limpar'),
                ),
              ],
            ),

            const SizedBox(height: 30),

            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    Text(
                      'Bitola para 110V:',
                      style: TextStyle(fontSize: 18),
                    ),
                    Text(
                      '${resultado110.toStringAsFixed(2)} mm²',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 15),
                    Text(
                      'Bitola para 220V:',
                      style: TextStyle(fontSize: 18),
                    ),
                    Text(
                      '${resultado220.toStringAsFixed(2)} mm²',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
