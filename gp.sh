#!/bin/bash

# Combine all passed arguments as commit message
commit_message="$*"

# Exit if no commit message is provided
if [ -z "$commit_message" ]; then
  echo "Please provide a commit message."
  exit 1
fi

git add .
git commit -m "$commit_message"
git push

echo "Changes pushed with message: $commit_message"