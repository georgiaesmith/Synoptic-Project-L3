<?php

use Illuminate\Database\Seeder;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table( 'media_database' )->delete();
      for ( $i = 0; $i < 100; $i++ ){
        DB::table( 'media_database' )->insert([
          'name' => str_random( 10 ),
          'artist' => str_random( 10 ),
          'album' => str_random( 10 )
        ]);
      }
    }
}