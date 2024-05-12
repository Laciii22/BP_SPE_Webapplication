<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Sample articles data
        $articles = [
            [
                'title' => 'Táto stránka je zatiaľ prázdna.',
                'content' => 'Táto stránka zatiaľ neobsahuje žiadne články.',
                'source' => 'https://example.com',
            ],
        ];
        

        // Insert sample articles into the database
        foreach ($articles as $articleData) {
            Article::create($articleData);
        }
    }
}
