

#!/usr/bin/env bash

#==============================================================================
# FILE:          client.sh
# AUTOHR:        Markus Schneider
# DATE:          2023-09-28
# PURPOSE:       Simple Server Client
#==============================================================================

##-----------------------------------------------
## CONFIG
##-----------------------------------------------
APP_URL=localhost
APP_PORT=3000
APP_DATA01='{"name":"Max","age":23}'
APP_DATA02='{"name":"Leo","age":26}'


##-----------------------------------------------
## SUBROUTINE(s)
##-----------------------------------------------
run() {
  curl -X POST "http://${APP_URL}:${APP_PORT}/api/v1" -H 'Content-Type: application/json' -d $APP_DATA01
  echo ""
  echo "still processing ..."
  sleep 5
  curl -X POST "http://${APP_URL}:${APP_PORT}/api/v1" -H 'Content-Type: application/json' -d $APP_DATA02
  echo ""
}

##-----------------------------------------------
## MAIN
##-----------------------------------------------
main() {
  run
}

main