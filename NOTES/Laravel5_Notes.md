# Laravel 5 Notes

## Eloquent

### where()

Default where usage: `->where('fieldname', 'value')` creates:
> ...WHERE 'fieldname' = 'value'

Can also do: `->where('fieldname', '!=', 'value')` which creates:
> ...WHERE 'fieldname' != 'value'

More parameters can be used as well:
> =, <, >, <=, >=, <>, !=, LIKE, NOT LIKE, BETWEEN, ILIKE

## Controllers

### Invoke Method (classes with a single method):

If a controller has just one method then you can simplify the controller by using the __invoke() method.
Create a controller with a __invoke() method, then in the routes file simply call it like this:
> Route::get('home', 'HomeController');

The HomeController will look like this:

```
<?php
namespace App\Http\Controllers;
class HomeController extends Controller
{
    public function __invoke()
    {
        return 'Welcome!';
    }
}
```

Can create the invokeable controller using the `artisan` command:

> php artisan make:controller HomeController --invokable
