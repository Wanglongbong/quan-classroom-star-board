#!/bin/zsh

cd "${0:A:h}" || exit 1

if [ ! -d node_modules ]; then
  npm install || exit 1
fi

echo ""
echo "Bảng Sao Lớp Học đang mở tại: http://localhost:7310"
echo "Giữ cửa sổ này mở trong lúc sử dụng website."
echo ""

npm run dev
