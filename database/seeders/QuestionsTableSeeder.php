<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questions = [
            ['id' => 4, 'question' => 'Aká je hlavná cieľ štandardu Single Pair Ethernet (SPE)?'],
            ['id' => 5, 'question' => 'Aký typ medených vodičov môže byť použitý pre Single Pair Ethernet (SPE)?'],
            ['id' => 6, 'question' => 'Aké rýchlosti prenosu dát môže dosiahnuť Single Pair Ethernet (SPE)?'],
            ['id' => 7, 'question' => 'Akú výhodu ponúka Single Pair Ethernet (SPE) v oblasti nákladov?'],
            ['id' => 8, 'question' => 'V ktorých odvetviach je Single Pair Ethernet (SPE) univerzálnym štandardom?'],
            ['id' => 9, 'question' => 'Aké vlastnosti zabezpečuje Single Pair Ethernet (SPE) z hľadiska kompatibility?'],
            ['id' => 10, 'question' => 'Ako sa nazýva štandard Ethernetu prispôsobený pre komunikáciu siete v automobiloch?'],
            ['id' => 11, 'question' => 'Aká je hlavná cieľ štandardu IEEE 802.3bw (100BaseT1) v automobilových sieťach?'],
            ['id' => 12, 'question' => 'Čo je cieľom použitia štandardu 100BaseT1 vo vozidlách?'],
            ['id' => 13, 'question' => 'Prečo sa automobilové spoločnosti spojili s výrobcami integrovaných obvodov (IC) a vývojármi systémov?'],
            ['id' => 14, 'question' => 'Ako pomáha štandard 100BaseT1 zvládať vyšší dopyt po šírke pásma v moderných automobilových elektrických systémoch?'],
            ['id' => 15, 'question' => 'Aká je hlavná cieľ štandardu IEEE 1000Base-T1?'],
            ['id' => 16, 'question' => 'Ako sa káble 1000Base-T1 porovnávajú so štandardnými LAN káblami, ako sú Cat-5, Cat-6 alebo Cat-7?'],
            ['id' => 17, 'question' => 'V akom režime pracuje 1000Base-T1?'],
            ['id' => 18, 'question' => 'Aká je maximálna dosiahnutelná vzdialenosť pre ethernetové pripojenia s použitím štandardu 1000Base-T1?'],
            ['id' => 19, 'question' => 'Aká funkcia je k dispozícii pre napájanie zariadení cez ethernetové pripojenie podľa štandardu 1000Base-T1?'],
            ['id' => 20, 'question' => 'Ktorá z uvedených výhod nezodpovedá technológii 10Base-T1S?'],
            ['id' => 21, 'question' => 'Aká topológia je charakteristická pre 10Base-T1S?'],
            ['id' => 22, 'question' => 'Ktorá z vlastností nezahrňuje technológia 10Base-T1S?'],
            ['id' => 23, 'question' => 'Ktorá topológia siete sa používa v štandarde 10BASE-T1L?'],
            ['id' => 24, 'question' => 'Aká je hlavná účel použitia štandardu 10BASE-T1L?'],
            ['id' => 25, 'question' => 'Aká je hlavná cieľ špecifikácie Advance Physical Layer (APL)?'],
            ['id' => 26, 'question' => 'Ktoré aplikácie sú typicky vhodné pre použitie špecifikácie Advance Physical Layer (APL)?']
        ];

        // Vložení otázek do databáze
        foreach ($questions as $questionData) {
            Question::create($questionData);
        }
    }
}
