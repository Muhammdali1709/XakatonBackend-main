const GET_CATEGORY = `
    select * from categories
`
const POST_CATEGORY = `
    insert into categories(category_title) values($1) returning*
`
const PUT_CATEGORY = `
    update categories
    set category_title=$2
    where category_id=$1
    returning*
`
const DELETE_CATEGORY = `
delete from categories where category_id=$1 returning*
`
export {
    GET_CATEGORY,
    POST_CATEGORY,
    PUT_CATEGORY,
    DELETE_CATEGORY
}