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
                'title' => 'Sample Article 1',
                'content' => 'Content of Sample Article 1',
                'source' => 'https://example.com/article1',
            ],
            [
                'title' => 'Sample Article 2',
                'content' => 'Content of Sample Article 2',
                'source' => 'https://example.com/article2',
            ],
            [
                'title' => 'Sample Article 3',
                'content' => 'Content of Sample Article 3',
                'source' => 'https://example.com/article3',
            ],
            [
                'title' => 'Sample Article 4',
                'content' => 'Content of Sample Article 4',
                'source' => 'https://example.com/article4',
            ],
            [
                'title' => 'Sample Article 5',
                'content' => 'Content of Sample Article 5',
                'source' => 'https://example.com/article5',
            ],
            [
                'title' => 'Sample Article 6',
                'content' => 'Content of Sample Article 6',
                'source' => 'https://example.com/article6',
            ],
            [
                'title' => 'Sample Article 7',
                'content' => 'Content of Sample Article 7',
                'source' => 'https://example.com/article7',
            ],
            [
                'title' => 'Sample Article 8',
                'content' => 'Content of Sample Article 8',
                'source' => 'https://example.com/article8',
            ],
            [
                'title' => 'Sample Article 9',
                'content' => 'Content of Sample Article 9',
                'source' => 'https://example.com/article9',
            ],
            [
                'title' => 'Sample Article 10',
                'content' => 'Content of Sample Article 10',
                'source' => 'https://example.com/article10',
            ],
            [
                'title' => 'Sample Article 11',
                'content' => 'Content of Sample Article 11',
                'source' => 'https://example.com/article11',
            ],
            [
                'title' => 'Sample Article 12',
                'content' => 'Content of Sample Article 12',
                'source' => 'https://example.com/article12',
            ],
            [
                'title' => 'Sample Article 13',
                'content' => 'Content of Sample Article 13',
                'source' => 'https://example.com/article13',
            ],
            [
                'title' => 'Sample Article 14',
                'content' => 'Content of Sample Article 14',
                'source' => 'https://example.com/article14',
            ],
            [
                'title' => 'Sample Article 15',
                'content' => 'Content of Sample Article 15',
                'source' => 'https://example.com/article15',
            ],
        ];
        

        // Insert sample articles into the database
        foreach ($articles as $articleData) {
            Article::create($articleData);
        }
    }
}
