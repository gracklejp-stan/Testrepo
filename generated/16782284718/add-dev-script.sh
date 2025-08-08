#!/bin/bash

FILE="package.json"

if [ ! -f "$FILE" ]; then
  echo "package.json not found!"
  exit 1
fi

# Check if "dev" script already exists
if grep -q '"dev":' "$FILE"; then
  echo "'dev' script already exists. Skipping."
  exit 0
fi

echo "Adding 'dev' script to package.json..."

# Insert the dev script after the "start" script line
sed -i '/"start":/a\    "dev": "concurrently \\"yarn start\\" \\"yarn start-backend\\"", ' "$FILE"

echo "Done. Added: \"dev\": \"concurrently \\\"yarn start\\\" \\\"yarn start-backend\\\"\""