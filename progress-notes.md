# Tic-Tac-Toe Game

### Coding Step One: Create CURL Scripts

Created `sign-up.sh` and `sign-in.sh` files:

###### sign-up.sh

```bash
# command to use on terminal:
# $ EMAIL="example@example.com" PASSWORD="12345" PASSWORD_CONFIRMATION="12345" sh curl-scripts/sign-up.sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
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

```

Sign-in.sh

```bash
# command to use on terminal:
# $ EMAIL="example@example.com" PASSWORD="12345" sh curl-scripts/json/sign-up.sh

curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo

```

###### Terminal Output of  `sign-up.sh`

```bash
$ EMAIL="example@example.com" PASSWORD="12345" PASSWORD_CONFIRMATION="12345" sh curl-scripts/sign-up.sh
HTTP/1.1 201 Created
Server: nginx/1.4.6 (Ubuntu)
Date: Fri, 22 Jun 2018 17:04:50 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
ETag: W/"537742b0fd62ea64b5ea102147508493"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9020cb37-6b99-460b-a2b0-b2ea9f751b9a
X-Runtime: 0.105424
Vary: Origin

{"user":{"id":3105,"email":"example@example.com"}}
```

###### Terminal Output of `sign-in.sh`

```bash
$ EMAIL="example@example.com" PASSWORD="12345" sh curl-scripts/sign-in.sh
HTTP/1.1 200 OK
Server: nginx/1.4.6 (Ubuntu)
Date: Fri, 22 Jun 2018 17:11:03 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
ETag: W/"fb52a9db57e191565ad3071a20345e92"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 36a57334-317e-4d22-b28b-360274360607
X-Runtime: 0.100180
Vary: Origin

{"user":{"id":3105,"email":"example@example.com","token":"BAhJIiU3N2E0NWY2NjhiZTU3ZmE1MDdjMTIzNDVmZWRkYzNmZQY6BkVG--9c60eb5b134b991d74c5d270493f399cee6b6ca0"}}
```

Terminal Output of `sign-out.sh`

```bash
$ ID=3105 sh curl-scripts/sign-out.sh
HTTP/1.1 401 Unauthorized
Server: Cowboy
Date: Fri, 22 Jun 2018 17:21:39 GMT
Connection: keep-alive
Www-Authenticate: Token realm="Application"
Content-Type: text/plain; charset=utf-8
Cache-Control: no-cache
X-Request-Id: 01c74b7c-6afc-48bd-ad67-71f499b5425b
X-Runtime: 0.003709
Vary: Origin
Transfer-Encoding: chunked
Via: 1.1 vegur

HTTP Token: Access denied.
```

