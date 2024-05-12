<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Vytvorte správcu
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('Admin1234'),
            'admin' => true,
            'email_verified_at' => now(),
        ]);

        // Vytvorte ďalších dvoch používateľov
        DB::table('users')->insert([
            'name' => 'User1',
            'email' => 'user1@example.com',
            'password' => Hash::make('password'),
            'admin' => false,
            'email_verified_at' => now(),
        ]);

        DB::table('users')->insert([
            'name' => 'User2',
            'email' => 'user2@example.com',
            'password' => Hash::make('password'),
            'admin' => false,
            'email_verified_at' => now(),
        ]);
    }
}
