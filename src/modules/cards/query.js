
const GET_CARDS = `
select 
m.meet_id id,
 fullname speaker,
 user_profession proffesion,
 meet_title title,
 meet_description description,
 meet_text matn,
 meet_date date,
 meet_time vaqt,
 meet_status status,
 meet_link_youtube youtube,
 meet_image image
from meeting m
left join users u on u.user_id=m.user_id
where status='active';
`
const POST_CARDS = `
insert into Meeting(meet_title,meet_description,meet_text,meet_date,meet_time,meet_status,meet_link_youtube,meet_image,subcategory_id,user_id)values($1,$2,$3,$4,$5::time,$6,$7,$8,$9,$10) returning*
`
const UPDATE_CARDS = `
update meeting
set status='active'
where meet_id=$1
returning*
`
const DELETE_CARDS = `
update meeting
set status='deleted'
where meet_id=$1
returning*
`
export {
  GET_CARDS,
  POST_CARDS,
  DELETE_CARDS,
  UPDATE_CARDS
}