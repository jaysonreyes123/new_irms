<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activitylog_mains', function (Blueprint $table) {
            $table->id();
            $table->integer('itemid');
            $table->unsignedBigInteger('module');
            $table->foreign('module')->references('id')->on('modules')->onDelete('cascade');
            $table->integer('status');
            $table->unsignedBigInteger('whodid');
            $table->foreign('whodid')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activitylog_mains');
    }
};
