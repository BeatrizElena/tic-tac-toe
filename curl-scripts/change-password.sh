# command to use on terminal:
# $ TOKEN="BAhJIiU0ZTJlMTg0NzYxNzI0ZDY3NGVmODQ2YWFiYjg2YmI1OAY6BkVG--a7a49a3f2bf26f9632b9249296789d093ed42dbd" OLD_PASSWORD="12345" NEW_PASSWORD="123" sh curl-scripts/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com//change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
      }
    }'

echo
