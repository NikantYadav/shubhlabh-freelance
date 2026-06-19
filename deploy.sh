#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="shubhlabh"
CONTAINER_NAME="shubhlabh"

cd "$(dirname "${BASH_SOURCE[0]}")"

git fetch origin

LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})

if [ "$LOCAL" = "$REMOTE" ] && docker image inspect "$IMAGE_NAME:latest" >/dev/null 2>&1; then
    echo "No changes and image already exists. Nothing to do."
    exit 0
fi

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "Changes detected, pulling..."
    git pull origin "$(git rev-parse --abbrev-ref HEAD)"
fi

echo "Building image..."
set -a
source .env
set +a
docker build \
    --build-arg REACT_APP_EMAILJS_PUBLIC_KEY="$REACT_APP_EMAILJS_PUBLIC_KEY" \
    --build-arg REACT_APP_EMAILJS_SERVICE_ID="$REACT_APP_EMAILJS_SERVICE_ID" \
    --build-arg REACT_APP_EMAILJS_TEMPLATE_ID="$REACT_APP_EMAILJS_TEMPLATE_ID" \
    --build-arg REACT_APP_TO_EMAIL="$REACT_APP_TO_EMAIL" \
    -t "$IMAGE_NAME:latest" .

echo "Restarting container..."
docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
docker run -d --name "$CONTAINER_NAME" -p 80:80 --restart unless-stopped "$IMAGE_NAME:latest"

echo "Deploy complete."
