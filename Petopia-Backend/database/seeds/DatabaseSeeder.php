<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 1,
            'title' => 'Users',
            'icon' => 'fa-user',
            'uri' => 'users',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]); 

         DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 2,
            'title' => 'Pets',
            'icon' => 'fa-chevron-right',
            'uri' => 'pets',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]); 

         DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 3,
            'title' => 'Cages',
            'icon' => 'fa-chevron-right',
            'uri' => 'cages',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]);
         DB::table('admin_menu')->insert([
                'parent_id' => 0,
                'order' => 4,
                'title' => 'Services',
                'icon' => 'fa-chevron-right',
                'uri' => 'services',
                'permission' => null,
                'created_at' => null,
                'updated_at' => null
                ]); 

         DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 5,
            'title' => 'Boardings',
            'icon' => 'fa-chevron-right',
            'uri' => 'boardings',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]);

         DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 6,
            'title' => 'Reservations',
            'icon' => 'fa-chevron-right',
            'uri' => 'reservations',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]);

         DB::table('admin_menu')->insert([
            'parent_id' => 0,
            'order' => 7,
            'title' => 'Consultations',
            'icon' => 'fa-chevron-right',
            'uri' => 'consultations',
            'permission' => null,
            'created_at' => null,
            'updated_at' => null
            ]);
            

            

        

    }
}
