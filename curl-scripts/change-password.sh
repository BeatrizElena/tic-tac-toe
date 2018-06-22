# It looks like server does not allow me to change password

# ID=2 sh curl-scripts/change-password.sh

# command to use on terminal:
# $ TOKEN="" NEW_PASSWORD="12345" sh curl-scripts/json/sign-up.sh

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
