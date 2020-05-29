<?php

namespace App\Admin\Controllers;

use App\Consultation;
use App\User;
use App\Pet;
use App\Reservation;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ConsultationController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Consultation';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Consultation());

        $grid->column('id', __('Id'));
        $grid->column('user.name', __('Pet Owner'));
        $grid->column('pet.name', __('Pet Name'));
        $grid->column('reservation.date', __('Reservation Date'));
        $grid->column('presenting_signs', __('Presenting signs'));
        $grid->column('frequency_and_duration', __('Frequency and duration'));
        $grid->column('appetite', __('Appetite'));
        $grid->column('drinking', __('Drinking'));
        $grid->column('urination', __('Urination'));
        $grid->column('bowel', __('Bowel'));
        $grid->column('vomiting', __('Vomiting'));
        $grid->column('attitude', __('Attitude'));
        $grid->column('coughing', __('Coughing'));
        $grid->column('sneezing', __('Sneezing'));
        $grid->column('HR', __('HR'));
        $grid->column('RR', __('RR'));
        $grid->column('CRT', __('CRT'));
        $grid->column('WT', __('WT'));
        $grid->column('eyes', __('Eyes'));
        $grid->column('ears', __('Ears'));
        $grid->column('mouth', __('Mouth'));
        $grid->column('lung_sounds', __('Lung sounds'));
        $grid->column('heart_sounds', __('Heart sounds'));
        $grid->column('neuro', __('Neuro'));
        $grid->column('abdomen', __('Abdomen'));
        $grid->column('skin', __('Skin'));
        $grid->column('skeletal', __('Skeletal'));
        $grid->column('DDx', __('DDx'));
        $grid->column('tests', __('Tests'));
        $grid->column('treatment', __('Treatment'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Consultation::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('user.name', __('Pet Owner'));
        $show->field('pet.name', __('Pet Name'));
        $show->field('reservation.date', __('Reservation Date'));
        $show->field('presenting_signs', __('Presenting signs'));
        $show->field('frequency_and_duration', __('Frequency and duration'));
        $show->field('appetite', __('Appetite'));
        $show->field('drinking', __('Drinking'));
        $show->field('urination', __('Urination'));
        $show->field('bowel', __('Bowel'));
        $show->field('vomiting', __('Vomiting'));
        $show->field('attitude', __('Attitude'));
        $show->field('coughing', __('Coughing'));
        $show->field('sneezing', __('Sneezing'));
        $show->field('HR', __('HR'));
        $show->field('RR', __('RR'));
        $show->field('CRT', __('CRT'));
        $show->field('WT', __('WT'));
        $show->field('eyes', __('Eyes'));
        $show->field('ears', __('Ears'));
        $show->field('mouth', __('Mouth'));
        $show->field('lung_sounds', __('Lung sounds'));
        $show->field('heart_sounds', __('Heart sounds'));
        $show->field('neuro', __('Neuro'));
        $show->field('abdomen', __('Abdomen'));
        $show->field('skin', __('Skin'));
        $show->field('skeletal', __('Skeletal'));
        $show->field('DDx', __('DDx'));
        $show->field('tests', __('Tests'));
        $show->field('treatment', __('Treatment'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Consultation());

        $form->select('user_id',__('Pet Owner'))->options(User::all()->pluck('name','id'));
        $form->select('pet_id',__('Pet Name'))->options(Pet::all()->pluck('name','id'));
        $form->select('reservation_id',__('Reservation Date'))->options(Reservation::all()->pluck('date','id'));
        $form->textarea('presenting_signs', __('Presenting signs'));
        $form->textarea('frequency_and_duration', __('Frequency and duration'));
        $form->textarea('appetite', __('Appetite'));
        $form->textarea('drinking', __('Drinking'));
        $form->textarea('urination', __('Urination'));
        $form->textarea('bowel', __('Bowel'));
        $form->textarea('vomiting', __('Vomiting'));
        $form->textarea('attitude', __('Attitude'));
        $form->textarea('coughing', __('Coughing'));
        $form->textarea('sneezing', __('Sneezing'));
        $form->textarea('HR', __('HR'));
        $form->textarea('RR', __('RR'));
        $form->textarea('CRT', __('CRT'));
        $form->textarea('WT', __('WT'));
        $form->textarea('eyes', __('Eyes'));
        $form->textarea('ears', __('Ears'));
        $form->textarea('mouth', __('Mouth'));
        $form->textarea('lung_sounds', __('Lung sounds'));
        $form->textarea('heart_sounds', __('Heart sounds'));
        $form->textarea('neuro', __('Neuro'));
        $form->textarea('abdomen', __('Abdomen'));
        $form->textarea('skin', __('Skin'));
        $form->textarea('skeletal', __('Skeletal'));
        $form->textarea('DDx', __('DDx'));
        $form->textarea('tests', __('Tests'));
        $form->textarea('treatment', __('Treatment'));

        return $form;
    }
}
