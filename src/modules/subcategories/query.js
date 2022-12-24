
const get = `
select 
subcategory_id as subcategoryId,
subcategory_title as subcategoryTitle,
category_id as categoryId
 from subcategories
`
export {
    get,
}