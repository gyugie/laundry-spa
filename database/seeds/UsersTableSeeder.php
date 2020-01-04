<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Mugiono',
            'email' => 'email@admin.com',
            'email_verified_at' => now(),
            'password' => bcrypt('secret'),
            'role' => 0
        ]);
    }
}
