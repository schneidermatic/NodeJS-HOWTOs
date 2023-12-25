

#!/usr/bin/env bash

#==============================================================================
# FILE:          client.sh
# AUTOHR:        Markus Schneider
# DATE:          2023-12-24
# PURPOSE:       Simple Server Client
#==============================================================================

##-----------------------------------------------
## CONFIG
##-----------------------------------------------
APP_URL=localhost
APP_PORT=3000

##-----------------------------------------------
## SUBROUTINE(s)
##-----------------------------------------------
run() {
  curl -X GET "http://${APP_URL}:${APP_PORT}"
  echo ""
  curl -X POST "http://${APP_URL}:${APP_PORT}"
  echo ""
  curl -X PUT "http://${APP_URL}:${APP_PORT}"
  echo ""
  curl -X DELETE "http://${APP_URL}:${APP_PORT}"
  echo ""
}

##-----------------------------------------------
## MAIN
##-----------------------------------------------
main() {
  run
}

main
