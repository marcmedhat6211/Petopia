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

         DB::table('services')->insert([
            'name' => 'Grooming',
            'description' => 'Pamper your pet with the finest haircuts'
         ]);

         DB::table('services')->insert([
            'name' => 'Medical Shower',
            'description' => 'We would be happy to proudly offer 
                              your pet a refreshing medical shower 
                              with our professional bathing service'
         ]);

         DB::table('services')->insert([
            'name' => 'Boarding',
            'description' => 'Whether you are out of town for a day, a week or more, 
                              board your pet in comfort and safety at our clinic 
                              boarding facility. For cats, we have spacious cat cage 
                              and lie on soft blanket. For dogs, we offer daily walks 
                              and bathroom breaks'
         ]);

         DB::table('services')->insert([
            'name' => 'Physical Examination',
            'description' => 'We provide physical examinations with a comprehensive 
                              head to tail inspection of your pet. Your vet will 
                              listen to the heart and lung, and palpate the limbs 
                              and abdomen for any abnormalities that may require care'
         ]);

         DB::table('services')->insert([
            'name' => 'Vaccination',
            'description' => 'Vaccinations protect your pet against common infectious
                              diseases that can make them very sick. At Petopia clinic 
                              we follow the American Animal Hospital Association guidlines'
         ]);

         DB::table('services')->insert([
            'name' => 'Anti Flees and Ticks',
            'description' => 'Provide regular routine for prevention and treatment 
                              of external parasites like fleas and ticks with proven 
                              efficacy drugs'
         ]);

         DB::table('services')->insert([
            'name' => 'Deworming',
            'description' => 'Testing for internal parasites and regular deworming 
                              medication can prevent harmful illness or diseases 
                              in pets'
         ]);
   }
}
