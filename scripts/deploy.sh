
#!/bin/bash

set -e

echo "Starting "

read -p "Commit : " message

if [ -z "$message" ]; then
    echo "[ERROR] Commit message cannot be empty."
    exit 1
fi

git add .

if git commit -m "$message"; then
    echo "[OK] Commit successful."
else
    echo "[ERROR] Commit failed."
    exit 1
fi

if git push origin main; then
    echo "[OK] Push successful."
else
    echo "[ERROR] Push failed."
    exit 1
fi

echo "Deployment completed."
