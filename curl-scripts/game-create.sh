# command to use on terminal:
# $ PLAYER_X={ID= EMAIL=""} sh curl-scripts/game-create.sh

# "player_x": "'"${PLAYER_X}"'"{
#   "id": "'"${ID}"'",
#   "email": "'"${EMAIL}"'"

curl "https://tic-tac-toe-wdi.herokuapp.com/games/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "game": {

      }
  }'

echo
