# command to use on terminal:
# $ EMAIL="example@example.com" PASSWORD="12345" PASSWORD_CONFIRMATION="12345" sh curl-scripts/sign-up.sh

curl "https://tic-tac-toe-wdi.herokuapp.com//sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
