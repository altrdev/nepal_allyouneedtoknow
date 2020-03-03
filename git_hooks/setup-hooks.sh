#!/bin/sh

set -e

echo "========== Setting up Hooks =========="

echo "Setting up pre-commit hook"
cp pre-commit.sh ../.git/hooks/pre-commit
chmod +x ../.git/hooks/pre-commit

echo "Setting up post-merge hook"
cp post-merge.sh ../.git/hooks/post-merge
chmod +x ../.git/hooks/post-merge

echo "========== Setup completed =========="
