#!/bin/sh
set -e

echo "Applying database migrations..."
i=0
until npx prisma migrate deploy; do
  i=$((i + 1))
  if [ "$i" -ge 30 ]; then
    echo "Migrations failed after $i attempts"
    exit 1
  fi
  echo "Database not ready yet, retry $i..."
  sleep 2
done

echo "Starting API..."
exec node dist/main.js
