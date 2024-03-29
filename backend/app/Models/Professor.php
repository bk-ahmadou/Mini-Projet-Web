<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'grade',
        'email',
        'user_id',
    ];

    public $incrementing = false;

    /**
     * @var mixed
     */
    private $name;
    /**
     * @var mixed
     */
    private $grade;
    /**
     * @var mixed
     */
    private $email;
    /**
     * @var mixed
     */
    private $user_id;
    /**
     * @var mixed
     */
    private $id;

}
