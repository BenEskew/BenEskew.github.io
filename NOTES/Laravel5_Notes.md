# Laravel 5 Notes

## Eloquent

#### where()

Default where usage: `->where('fieldname', 'value')` creates:
> ...WHERE 'fieldname' = 'value'
Can also do: `->where('fieldname', '!=', 'value')` which creates:
> ...WHERE 'fieldname' != 'value'
More parameters can be used as well:
> =, <, >, <=, >=, <>, !=, LIKE, NOT LIKE, BETWEEN, ILIKE
