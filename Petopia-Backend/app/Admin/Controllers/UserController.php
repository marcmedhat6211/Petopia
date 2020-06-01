<?php

namespace App\Admin\Controllers;

use App\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Form\Field\Nullable;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class UserController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'User';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new User());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('email', __('Email'));
        $grid->column('email_verified_at', __('Email verified at'));
        $grid->column('password', __('Password'));
        $grid->column('phone_number', __('Phone number'));
        $grid->column('recommendation', __('Recommendation'));
        $grid->column('address', __('Address'));
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
        $show = new Show(User::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('email', __('Email'));
        $show->field('email_verified_at', __('Email verified at'));
        $show->field('password', __('Password'));
        $show->field('phone_number', __('Phone number'));
        $show->field('recommendation', __('Recommendation'));
        $show->field('address', __('Address'));
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
        $form = new Form(new User());

        $form->text('name', __('Name'))->rules('required|min:3');
        $form->email('email', __('Email'))->rules('required');
        $form->datetime('email_verified_at', __('Email verified at'))->default(date('Y-m-d H:i:s'))->rules('required');
        $form->password('password', __('Password'))->rules('required|min:6|regex:"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"', [
            'regex' => 'at least one letter and one number',
        ]);
        $form->text('phone_number', __('Phone number'))->rules('required|min:11');
        $form->textarea('recommendation', __('Recommendation'))->rules('nullable');
        $form->text('address', __('Address'))->rules('required');

        return $form;
    }
}
