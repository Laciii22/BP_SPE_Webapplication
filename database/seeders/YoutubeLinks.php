<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YoutubeLinks extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Data pro YouTube odkazy
        $youtubeLinks = [
            [
                'id' => 29,
                'link' => 'https://www.youtube.com/embed/Zh9bJmqmXb4?si=Ww-IM1fFcINLScFQ',
                'name' => 'Single Pair Ethernet (SPE) - explained easily: The Enabler for IIoT',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 30,
                'link' => 'https://www.youtube.com/watch?v=6KtlmZKx85Q',
                'name' => 'Introduction to Single-Pair Ethernet | What You Need to Know',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 31,
                'link' => 'https://www.youtube.com/watch?v=_2Nt6BIeEHE',
                'name' => 'Evolution of Single Pair Ethernet (SPE): Unleashing the Next Level of Connectivity',
                'created_at' => '2024-03-06 12:36:37',
                'updated_at' => '2024-03-06 12:36:37',
            ],
            [
                'id' => 61,
                'link' => 'https://www.youtube.com/watch?v=mDHTr65L-YY',
                'name' => 'Basic understanding of 100BaseT1',
                'created_at' => null,
                'updated_at' => '2024-05-01 06:45:29',
            ],
            [
                'id' => 62,
                'link' => 'https://www.youtube.com/watch?v=Zyfx0v-KMJg',
                'name' => '10BaseT1 in 5 minutes.',
                'created_at' => null,
                'updated_at' => null,
            ],
            [
                'id' => 63,
                'link' => 'https://www.youtube.com/watch?v=x6WGadify2E&t=69s',
                'name' => 'What is Ethernet Advanced Physical Layer?',
                'created_at' => null,
                'updated_at' => null,
            ],
        ];

        // Vložení dat do databáze
        foreach ($youtubeLinks as $youtubeLink) {
            DB::table('youtube_links')->insert($youtubeLink);
        }
    }
}
