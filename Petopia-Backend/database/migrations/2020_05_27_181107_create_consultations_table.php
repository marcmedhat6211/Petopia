<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('pet_id');
            $table->unsignedBigInteger('reservation_id');
            $table->mediumText('presenting_signs');
            $table->mediumText('frequency_and_duration');
            $table->mediumText('appetite');
            $table->mediumText('drinking');
            $table->mediumText('urination');
            $table->mediumText('bowel');
            $table->mediumText('vomiting');
            $table->mediumText('attitude');
            $table->mediumText('coughing');
            $table->mediumText('sneezing');
            $table->mediumText('HR');
            $table->mediumText('RR');
            $table->mediumText('CRT');
            $table->mediumText('WT');
            $table->mediumText('eyes');
            $table->mediumText('ears');
            $table->mediumText('mouth');
            $table->mediumText('lung_sounds');
            $table->mediumText('heart_sounds');
            $table->mediumText('neuro');
            $table->mediumText('abdomen');
            $table->mediumText('skin');
            $table->mediumText('skeletal');
            $table->mediumText('DDx');
            $table->mediumText('tests');
            $table->mediumText('treatment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultations');
    }
}
