
const LOGIN = `
select
admin_id adminId,
username
from 
admins where username=$1 and password=$2
`
export {
  LOGIN
}