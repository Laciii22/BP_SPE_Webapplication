<?php

namespace Database\Seeders;

use App\Models\Answer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Answers extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Data odpovědí
        $answers = [
            ['id' => 10, 'question_id' => 4, 'answer_text' => 'Zvyšovať kompatibilitu s existujúcou inštalovanou infraštruktúrou.', 'correct_answer' => true],
            ['id' => 11, 'question_id' => 4, 'answer_text' => 'Zaviesť nový typ kábla pre vysokorýchlostnú komunikáciu.', 'correct_answer' => false],
            ['id' => 12, 'question_id' => 4, 'answer_text' => 'Eliminovať použitie kategórie 6A v káblových systémoch.', 'correct_answer' => false],
            ['id' => 13, 'question_id' => 4, 'answer_text' => 'Obmedziť prenosové rýchlosti na 100 Mbps.', 'correct_answer' => false],
            ['id' => 14, 'question_id' => 5, 'answer_text' => 'Len kategória 5e.', 'correct_answer' => false],
            ['id' => 15, 'question_id' => 5, 'answer_text' => 'Len kategória 6A.', 'correct_answer' => false],
            ['id' => 16, 'question_id' => 5, 'answer_text' => 'Len kategória 6.', 'correct_answer' => false],
            ['id' => 17, 'question_id' => 5, 'answer_text' => 'Kategórie 5e, 6 alebo 6A.', 'correct_answer' => true],
            ['id' => 18, 'question_id' => 6, 'answer_text' => 'Maximálne 100 Mbps.', 'correct_answer' => false],
            ['id' => 19, 'question_id' => 6, 'answer_text' => 'Maximálne 500 Mbps.', 'correct_answer' => false],
            ['id' => 20, 'question_id' => 6, 'answer_text' => 'Až do 1 Gbps.', 'correct_answer' => true],
            ['id' => 21, 'question_id' => 7, 'answer_text' => 'Zvyšuje náklady na instalácie a údržbu.', 'correct_answer' => false],
            ['id' => 22, 'question_id' => 7, 'answer_text' => 'Neposkytuje žiadnu výhodu z hľadiska nákladov.', 'correct_answer' => false],
            ['id' => 23, 'question_id' => 7, 'answer_text' => 'Umožňuje výrazné znižovanie nákladov na instalácie a údržbu sietí.', 'correct_answer' => true],
            ['id' => 24, 'question_id' => 7, 'answer_text' => 'Vyžaduje vysoké investície do infraštruktúry.', 'correct_answer' => false],
            ['id' => 25, 'question_id' => 8, 'answer_text' => 'Len v priemyselnej automatizácii.', 'correct_answer' => false],
            ['id' => 26, 'question_id' => 8, 'answer_text' => 'Len v telekomunikáciách.', 'correct_answer' => false],
            ['id' => 27, 'question_id' => 8, 'answer_text' => 'V rôznych odvetviach vrátane priemyselnej automatizácie, telekomunikácií a výroby automobilov.', 'correct_answer' => true],
            ['id' => 28, 'question_id' => 8, 'answer_text' => 'Len vo výrobe automobilov.', 'correct_answer' => false],
            ['id' => 29, 'question_id' => 9, 'answer_text' => 'Je postavená na nových technológiách, nie je kompatibilná s existujúcimi sieťovými infraštruktúrami.', 'correct_answer' => false],
            ['id' => 30, 'question_id' => 9, 'answer_text' => 'Neposkytuje kompatibilitu s existujúcimi sieťovými infraštruktúrami.', 'correct_answer' => false],
            ['id' => 31, 'question_id' => 9, 'answer_text' => 'Umožňuje plynulý prechod na SPE bez výmeny zariadení.', 'correct_answer' => true],
            ['id' => 32, 'question_id' => 9, 'answer_text' => 'Vyžaduje úplnú zmenu súčasných sieťových infraštruktúr.', 'correct_answer' => false],
            ['id' => 33, 'question_id' => 10, 'answer_text' => '100BaseTX', 'correct_answer' => false],
            ['id' => 34, 'question_id' => 10, 'answer_text' => '100BaseT1', 'correct_answer' => true],
            ['id' => 35, 'question_id' => 10, 'answer_text' => 'BroadR-Reach', 'correct_answer' => false],
            ['id' => 36, 'question_id' => 11, 'answer_text' => 'Zvýši náklady na káblovanie.', 'correct_answer' => false],
            ['id' => 37, 'question_id' => 11, 'answer_text' => 'Zníži emisie vozidiel.', 'correct_answer' => false],
            ['id' => 38, 'question_id' => 11, 'answer_text' => 'Zvýši priepustnosť dát a zníži náklady na káblovanie v automobilových sieťach.', 'correct_answer' => true],
            ['id' => 39, 'question_id' => 12, 'answer_text' => 'Zvýši hmotnosť káblov.', 'correct_answer' => false],
            ['id' => 40, 'question_id' => 12, 'answer_text' => 'Zníži šírku pásma.', 'correct_answer' => false],
            ['id' => 41, 'question_id' => 12, 'answer_text' => 'Zníži elektromagnetické rušenie (EMI), hmotnosť káblov, náklady a fyzickú veľkosť káblov.', 'correct_answer' => true],
            ['id' => 42, 'question_id' => 13, 'answer_text' => 'Na zvýšenie emisií vozidiel.', 'correct_answer' => false],
            ['id' => 43, 'question_id' => 13, 'answer_text' => 'Na zníženie komplexity elektrických systémov v vozidlách.', 'correct_answer' => false],
            ['id' => 44, 'question_id' => 13, 'answer_text' => 'Na vytvorenie nového štandardu Ethernetu prispôsobeného komunikačným sieťam v automobiloch.', 'correct_answer' => true],
            ['id' => 45, 'question_id' => 13, 'answer_text' => 'Na zvýšenie hmotnosti káblov.', 'correct_answer' => false],
            ['id' => 46, 'question_id' => 14, 'answer_text' => 'Znižuje počet elektronických riadiacich jednotiek (ECU) v vozidlách. B) Zvyšuje emisie vozidiel.', 'correct_answer' => false],
            ['id' => 47, 'question_id' => 14, 'answer_text' => 'Znížením šírky pásma v dátových prenosoch.', 'correct_answer' => false],
            ['id' => 48, 'question_id' => 14, 'answer_text' => 'Poskytuje rýchlu komunikačnú sieť s priepustnosťou dát 100 Mbps cez neuzemnené SPE vodiče.', 'correct_answer' => true],
            ['id' => 49, 'question_id' => 15, 'answer_text' => 'Zvýši náklady na káblovanie.', 'correct_answer' => false],
            ['id' => 50, 'question_id' => 15, 'answer_text' => 'Umožní prenos dát rýchlosťou 1000 megabitov za sekundu cez jediný dvojvodičový tkaný káblový pár.', 'correct_answer' => true],
            ['id' => 51, 'question_id' => 15, 'answer_text' => 'Zníži maximálnu dosiahnutú vzdialenosť pre ethernetové pripojenia.', 'correct_answer' => false],
            ['id' => 52, 'question_id' => 16, 'answer_text' => 'Sú ľahšie, tenšie, cenovo dostupnejšie a jednoduchšie sa pokladajú.', 'correct_answer' => true],
            ['id' => 53, 'question_id' => 16, 'answer_text' => 'Majú väčší polomer ohýbania.', 'correct_answer' => false],
            ['id' => 54, 'question_id' => 16, 'answer_text' => 'Nie sú kompatibilné s klasickým Ethernetom.', 'correct_answer' => false],
            ['id' => 55, 'question_id' => 17, 'answer_text' => 'Half-duplex.', 'correct_answer' => false],
            ['id' => 56, 'question_id' => 17, 'answer_text' => 'Full-duplex.', 'correct_answer' => true],
            ['id' => 57, 'question_id' => 18, 'answer_text' => 'Do 10 metrov.', 'correct_answer' => false],
            ['id' => 58, 'question_id' => 18, 'answer_text' => '40-100 metrov.', 'correct_answer' => false],
            ['id' => 59, 'question_id' => 18, 'answer_text' => 'Viac ako 100 metrov.', 'correct_answer' => false],
            ['id' => 60, 'question_id' => 18, 'answer_text' => '15-40 metrov.', 'correct_answer' => true],
            ['id' => 61, 'question_id' => 19, 'answer_text' => 'Power over Ethernet (PoE).', 'correct_answer' => false],
            ['id' => 62, 'question_id' => 19, 'answer_text' => 'Power over Data Line (PoDL).', 'correct_answer' => true],
            ['id' => 63, 'question_id' => 19, 'answer_text' => 'Power over Fiber (PoF).', 'correct_answer' => false],
            ['id' => 64, 'question_id' => 19, 'answer_text' => 'Power over Wi-Fi (PoW).', 'correct_answer' => false],
            ['id' => 65, 'question_id' => 20, 'answer_text' => 'Minimalizované riziko.', 'correct_answer' => false],
            ['id' => 66, 'question_id' => 20, 'answer_text' => 'Optimalizovaná šírka pásma.', 'correct_answer' => false],
            ['id' => 67, 'question_id' => 20, 'answer_text' => 'Podpora pre Ethernet v vozidle.', 'correct_answer' => false],
            ['id' => 68, 'question_id' => 20, 'answer_text' => 'Zvýšená náchylnosť k poruchám.', 'correct_answer' => true],
            ['id' => 69, 'question_id' => 21, 'answer_text' => 'Star.', 'correct_answer' => false],
            ['id' => 70, 'question_id' => 21, 'answer_text' => 'Ring.', 'correct_answer' => false],
            ['id' => 71, 'question_id' => 21, 'answer_text' => 'Multidrop.', 'correct_answer' => true],
            ['id' => 72, 'question_id' => 21, 'answer_text' => 'Point-to-Point.', 'correct_answer' => false],
            ['id' => 73, 'question_id' => 22, 'answer_text' => 'Škálovateľnosť a flexibilita.', 'correct_answer' => false],
            ['id' => 74, 'question_id' => 22, 'answer_text' => 'Power Over Data Lines.', 'correct_answer' => false],
            ['id' => 75, 'question_id' => 22, 'answer_text' => 'Nízke náklady na inštaláciu.', 'correct_answer' => true],
            ['id' => 76, 'question_id' => 22, 'answer_text' => 'Podpora viacerých uzlov na jednej linke.', 'correct_answer' => false],
            ['id' => 77, 'question_id' => 23, 'answer_text' => 'Multidrop.', 'correct_answer' => false],
            ['id' => 78, 'question_id' => 23, 'answer_text' => 'Point-to-Point.', 'correct_answer' => true],
            ['id' => 79, 'question_id' => 23, 'answer_text' => 'Star.', 'correct_answer' => false],
            ['id' => 80, 'question_id' => 23, 'answer_text' => 'Ring.', 'correct_answer' => false],
            ['id' => 81, 'question_id' => 24, 'answer_text' => 'V automobilovom priemysle.', 'correct_answer' => false],
            ['id' => 82, 'question_id' => 24, 'answer_text' => 'V telekomunikáciách.', 'correct_answer' => false],
            ['id' => 83, 'question_id' => 24, 'answer_text' => 'V procesnej automatizácii.', 'correct_answer' => true],
            ['id' => 84, 'question_id' => 24, 'answer_text' => 'Vo vysokorýchlostnej železničnej doprave.', 'correct_answer' => false],
            ['id' => 85, 'question_id' => 25, 'answer_text' => 'Poskytovať rýchly prenos dát.', 'correct_answer' => false],
            ['id' => 86, 'question_id' => 25, 'answer_text' => 'Zabezpečiť komunikáciu v náročných priemyselných prostrediach.', 'correct_answer' => true],
            ['id' => 87, 'question_id' => 25, 'answer_text' => 'Zlepšiť výkon spotrebných zariadení.', 'correct_answer' => false],
            ['id' => 88, 'question_id' => 26, 'answer_text' => 'Športové vybavenie.', 'correct_answer' => false],
            ['id' => 89, 'question_id' => 26, 'answer_text' => 'Domáce sieťové zariadenia.', 'correct_answer' => false],
            ['id' => 90, 'question_id' => 26, 'answer_text' => 'Procesná automatizácia v priemyselných zariadeniach.', 'correct_answer' => true],
            ['id' => 91, 'question_id' => 26, 'answer_text' => 'Spotrebná elektronika.', 'correct_answer' => false],
        ];

        // Insert sample articles into the database
        foreach ($answers as $answer) {
            Answer::create($answer);
        }
    }
}
