# Laravel 5 Notes

## Eloquent

### where()

#### Default Usage:

Default where usage: `->where('fieldname', 'value')` creates:
> ...WHERE 'fieldname' = 'value'

Can also do: `->where('fieldname', '!=', 'value')` which creates:
> ...WHERE 'fieldname' != 'value'

More parameters can be used as well:
`=`, `<`, `>`, `<=`, `>=`, `<>`, `!=`, `LIKE`, `NOT LIKE`, `BETWEEN`, `ILIKE`

#### Select all rows for a specific month (or day, year or time):

Use the `whereDate()` or `whereMonth()` or `whereDay()` or `whereYear()` or `whereTime()` methods:
```
$items = DB::table('items')->whereDate('created_at', '2019-03-31')->get();
```

```
$items = DB::table('items')->whereMonth('created_at', '03')->get();
```

```
$items = DB::table('items')->whereDay('created_at', '31')->get();
```

```
$items = DB::table('items')->whereYear('created_at', '2019')->get();
```

```
$items = DB::table('items')->whereTime('created_at', '=', '12:30:14')->get();
```

#### Be careful with DB::raw():

ALWAYS formulate the query like so:
```
$items = DB::select(
    DB::raw("SELECT id, name FROM tablename WHERE `name` = :the_name ORDER BY `name` ASC"),
    array('the_name' => $name)
);
```

## Controllers

### Invoke Method (classes with a single method):

If a controller has just one method then you can simplify the controller by using the `__invoke()` method.
Create a controller with a `__invoke()` method, then in the routes file simply call it like this:
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

## Views

### Override a specific error view per error code:

Add a view file to `resources/views/errors/404.blade.php` to override the view template for 404 errors.

Add a view file to `resources/views/errors/402.blade.php` to override the view template for 402 errors.

## Bug Fixes

### Fix "Specified key was too long" MySQL-related error:

Add the following to the `boot()` method of `app/Providers/AppServiceProvider.php`:
> Schema::defaultStringLength(191);

## Collections

### Append Data to JSON String (Created from Collection Object):

```
$CollectionObject = TheModel::where('id', 1)->first();
$jsonObjectToReturn = json_encode($CollectionObject);
$newArray = json_decode($jsonObjectToReturn, true);
$newArray['hello_world'] = 'Hello World';
$newJsonObjectToReturn = json_encode($newArray);
```
